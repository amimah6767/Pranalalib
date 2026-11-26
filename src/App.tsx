import { useEffect, useMemo, useState } from 'react';
import { CATALOG_BOOKS, REPOSITORY_ITEMS } from './data/libraryData';
import {
  BookCategory,
  LibraryWork,
  ReadingProgress,
  RepositoryType,
} from './types/library';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CatalogSection } from './components/CatalogSection';
import { RepositorySection } from './components/RepositorySection';
import { SavedShelfSection } from './components/SavedShelfSection';
import { DetailModal } from './components/DetailModal';
import { OnlineReaderModal } from './components/OnlineReaderModal';
import { Footer } from './components/Footer';

const SAVED_STORAGE_KEY = 'pranala_pustaka_saved_v1';
const HISTORY_STORAGE_KEY = 'pranala_pustaka_history_v1';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('beranda');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] =
    useState<BookCategory>('Semua');
  const [sortBy, setSortBy] = useState<'terbaru' | 'judul' | 'halaman'>(
    'terbaru'
  );
  const [selectedRepoType, setSelectedRepoType] =
    useState<RepositoryType>('Semua');

  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem(SAVED_STORAGE_KEY);
      return raw ? (JSON.parse(raw) as string[]) : [];
    } catch {
      return [];
    }
  });

  const [readingHistory, setReadingHistory] = useState<ReadingProgress[]>(
    () => {
      try {
        const raw = localStorage.getItem(HISTORY_STORAGE_KEY);
        return raw ? (JSON.parse(raw) as ReadingProgress[]) : [];
      } catch {
        return [];
      }
    }
  );

  const [detailWork, setDetailWork] = useState<LibraryWork | null>(null);
  const [readerState, setReaderState] = useState<{
    work: LibraryWork;
    chapterIndex: number;
  } | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(savedIds));
    } catch {
      // Abaikan jika penyimpanan lokal dibatasi
    }
  }, [savedIds]);

  useEffect(() => {
    try {
      localStorage.setItem(
        HISTORY_STORAGE_KEY,
        JSON.stringify(readingHistory)
      );
    } catch {
      // Abaikan jika penyimpanan lokal dibatasi
    }
  }, [readingHistory]);

  // Pantau posisi bagian aktif untuk penanda navigasi
  useEffect(() => {
    const sectionIds = ['beranda', 'katalog', 'repositori', 'rak-baca'];
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allWorks: LibraryWork[] = useMemo(
    () => [...CATALOG_BOOKS, ...REPOSITORY_ITEMS],
    []
  );

  const filteredBooks = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = CATALOG_BOOKS.filter((book) => {
      const matchCategory =
        selectedCategory === 'Semua' || book.category === selectedCategory;
      const matchQuery =
        !q ||
        book.title.toLowerCase().includes(q) ||
        book.subtitle.toLowerCase().includes(q) ||
        book.author.toLowerCase().includes(q) ||
        book.category.toLowerCase().includes(q) ||
        book.callNumber.toLowerCase().includes(q) ||
        book.synopsis.toLowerCase().includes(q);
      return matchCategory && matchQuery;
    });

    return [...list].sort((a, b) => {
      if (sortBy === 'judul') return a.title.localeCompare(b.title, 'id');
      if (sortBy === 'halaman') return b.pages - a.pages;
      return b.year - a.year;
    });
  }, [searchQuery, selectedCategory, sortBy]);

  const filteredRepository = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return REPOSITORY_ITEMS.filter((item) => {
      const matchType =
        selectedRepoType === 'Semua' || item.type === selectedRepoType;
      const matchQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.authors.toLowerCase().includes(q) ||
        item.repoCode.toLowerCase().includes(q) ||
        item.abstract.toLowerCase().includes(q) ||
        item.keywords.some((kw) => kw.toLowerCase().includes(q));
      return matchType && matchQuery;
    });
  }, [searchQuery, selectedRepoType]);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleToggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [id, ...prev]
    );
  };

  const recordProgress = (work: LibraryWork, chapterIndex: number) => {
    setReadingHistory((prev) => {
      const filtered = prev.filter((entry) => entry.itemId !== work.id);
      const updated: ReadingProgress = {
        itemId: work.id,
        kind: work.kind,
        chapterIndex,
        lastReadAt: new Date().toISOString(),
      };
      return [updated, ...filtered].slice(0, 12);
    });
  };

  const handleStartReading = (work: LibraryWork, chapterIndex = 0) => {
    setDetailWork(null);
    setReaderState({ work, chapterIndex });
    recordProgress(work, chapterIndex);
  };

  const handleChangeReaderChapter = (newIndex: number) => {
    setReaderState((prev) => {
      if (!prev) return null;
      recordProgress(prev.work, newIndex);
      return { ...prev, chapterIndex: newIndex };
    });
  };

  const handleStartFeaturedReading = () => {
    // Jika ada riwayat terakhir, lanjutkan bacaan terakhir; jika belum ada, buka buku unggulan pertama
    if (readingHistory.length > 0) {
      const last = readingHistory[0];
      const found = allWorks.find((w) => w.id === last.itemId);
      if (found) {
        handleStartReading(found, last.chapterIndex);
        return;
      }
    }
    handleStartReading(CATALOG_BOOKS[0], 0);
  };

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1E2421] flex flex-col">
      <Header
        activeSection={activeSection}
        savedCount={savedIds.length}
        onNavigate={handleNavigate}
        onStartFeaturedReading={handleStartFeaturedReading}
      />

      <main className="flex-1">
        <HeroSection
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalBooks={CATALOG_BOOKS.length}
          totalRepoItems={REPOSITORY_ITEMS.length}
          onExploreCatalog={() => handleNavigate('katalog')}
          onExploreRepository={() => handleNavigate('repositori')}
        />

        {searchQuery.trim() !== '' && (
          <div className="border-b border-[#DED8CC] bg-[#EFECE4] py-3">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 text-xs sm:px-6 lg:px-8">
              <p className="text-[#1E2421] tabular-nums">
                Hasil pencarian untuk{' '}
                <strong className="font-semibold">“{searchQuery}”</strong>:{' '}
                <span className="font-medium text-[#285245]">
                  {filteredBooks.length} buku katalog
                </span>{' '}
                dan{' '}
                <span className="font-medium text-[#285245]">
                  {filteredRepository.length} naskah repositori
                </span>
                .
              </p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="font-medium text-[#285245] underline underline-offset-4 hover:text-[#1E3F35] cursor-pointer"
              >
                Bersihkan pencarian
              </button>
            </div>
          </div>
        )}

        <CatalogSection
          books={filteredBooks}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
          onOpenDetail={(book) => setDetailWork(book)}
          onStartReading={handleStartReading}
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery('')}
        />

        <RepositorySection
          items={filteredRepository}
          selectedType={selectedRepoType}
          onSelectType={setSelectedRepoType}
          savedIds={savedIds}
          onToggleSave={handleToggleSave}
          onOpenDetail={(item) => setDetailWork(item)}
          onStartReading={handleStartReading}
          searchQuery={searchQuery}
          onClearSearch={() => setSearchQuery('')}
        />

        <SavedShelfSection
          allWorks={allWorks}
          savedIds={savedIds}
          readingHistory={readingHistory}
          onToggleSave={handleToggleSave}
          onStartReading={handleStartReading}
          onOpenDetail={(work) => setDetailWork(work)}
        />
      </main>

      <Footer onNavigate={handleNavigate} />

      <DetailModal
        work={detailWork}
        isSaved={detailWork ? savedIds.includes(detailWork.id) : false}
        onClose={() => setDetailWork(null)}
        onToggleSave={handleToggleSave}
        onStartReading={handleStartReading}
      />

      <OnlineReaderModal
        work={readerState?.work ?? null}
        chapterIndex={readerState?.chapterIndex ?? 0}
        isSaved={readerState ? savedIds.includes(readerState.work.id) : false}
        onClose={() => setReaderState(null)}
        onChangeChapter={handleChangeReaderChapter}
        onToggleSave={handleToggleSave}
      />
    </div>
  );
}
