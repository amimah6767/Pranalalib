import { Bookmark, BookOpen } from 'lucide-react';
import { BookCategory, CatalogBook } from '../types/library';
import { BookCover } from './BookCover';

interface CatalogSectionProps {
  books: CatalogBook[];
  selectedCategory: BookCategory;
  onSelectCategory: (cat: BookCategory) => void;
  sortBy: 'terbaru' | 'judul' | 'halaman';
  onSortChange: (sort: 'terbaru' | 'judul' | 'halaman') => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onOpenDetail: (book: CatalogBook) => void;
  onStartReading: (book: CatalogBook, chapterIndex?: number) => void;
  searchQuery: string;
  onClearSearch: () => void;
}

const CATEGORIES: BookCategory[] = [
  'Semua',
  'Arsitektur & Ruang',
  'Ekologi & Lingkungan',
  'Sastra & Sejarah',
  'Filsafat & Sains',
  'Sosial & Budaya',
];

export function CatalogSection({
  books,
  selectedCategory,
  onSelectCategory,
  sortBy,
  onSortChange,
  savedIds,
  onToggleSave,
  onOpenDetail,
  onStartReading,
  searchQuery,
  onClearSearch,
}: CatalogSectionProps) {
  return (
    <section id="katalog" className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading & Sort Control */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#DED8CC] pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium tracking-widest text-[#5A635E] uppercase">
              Koleksi Monograf &amp; Buku Pilihan
            </p>
            <h2 className="mt-1.5 font-serif text-2xl font-semibold text-[#1E2421] sm:text-3xl">
              Katalog Buku Daring
            </h2>
            <p className="mt-1 text-sm text-[#5A635E]">
              Telusuri buku menurut bidang kajian dan baca langsung di ruang
              baca web.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start sm:self-auto">
            <label
              htmlFor="catalog-sort"
              className="text-xs font-medium text-[#5A635E] whitespace-nowrap"
            >
              Urutkan:
            </label>
            <select
              id="catalog-sort"
              value={sortBy}
              onChange={(e) =>
                onSortChange(e.target.value as 'terbaru' | 'judul' | 'halaman')
              }
              className="h-10 rounded-lg border border-[#DED8CC] bg-[#FCFBF8] px-3 text-sm text-[#1E2421] focus:border-[#285245] focus:outline-none cursor-pointer"
            >
              <option value="terbaru">Terbitan Terbaru</option>
              <option value="judul">Judul (A–Z)</option>
              <option value="halaman">Jumlah Halaman</option>
            </select>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter kategori katalog buku"
          className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-2"
        >
          {CATEGORIES.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectCategory(category)}
                className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285245] ${
                  isActive
                    ? 'bg-[#285245] text-[#FCFBF8]'
                    : 'bg-[#EFECE4] text-[#5A635E] hover:bg-[#E5E0D5] hover:text-[#1E2421]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Book Grid */}
        {books.length === 0 ? (
          <div className="mt-8 rounded-xl border border-[#DED8CC] bg-[#FCFBF8] p-10 text-center">
            <p className="font-serif text-lg font-medium text-[#1E2421]">
              Tidak ada buku yang sesuai dengan pencarian Anda
            </p>
            <p className="mt-1.5 text-sm text-[#5A635E]">
              {searchQuery
                ? `Kata kunci "${searchQuery}" tidak ditemukan pada kategori ${selectedCategory}.`
                : `Belum ada koleksi pada kategori ${selectedCategory}.`}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {selectedCategory !== 'Semua' && (
                <button
                  type="button"
                  onClick={() => onSelectCategory('Semua')}
                  className="rounded-lg border border-[#DED8CC] bg-[#F7F5F0] px-4 py-2 text-xs font-medium text-[#1E2421] hover:bg-[#EFECE4] cursor-pointer"
                >
                  Tampilkan Semua Kategori
                </button>
              )}
              {searchQuery && (
                <button
                  type="button"
                  onClick={onClearSearch}
                  className="rounded-lg bg-[#285245] px-4 py-2 text-xs font-medium text-[#FCFBF8] hover:bg-[#1E3F35] cursor-pointer"
                >
                  Reset Pencarian
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => {
              const isSaved = savedIds.includes(book.id);
              return (
                <article
                  key={book.id}
                  className="group flex flex-col justify-between rounded-xl border border-[#DED8CC] bg-[#FCFBF8] p-5 transition-colors duration-150 hover:border-[#BFC7C1]"
                >
                  <div>
                    <button
                      type="button"
                      onClick={() => onOpenDetail(book)}
                      className="block w-full text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#285245]"
                    >
                      <BookCover book={book} />
                    </button>

                    {/* Clean Unboxed Metadata */}
                    <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#5A635E] tabular-nums">
                      <span className="font-medium text-[#285245]">
                        {book.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{book.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{book.pages} hlm</span>
                    </div>

                    <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-[#1E2421]">
                      <button
                        type="button"
                        onClick={() => onOpenDetail(book)}
                        className="text-left hover:text-[#285245] transition-colors cursor-pointer"
                      >
                        {book.title}
                      </button>
                    </h3>

                    <p className="mt-1 text-sm font-medium text-[#5A635E]">
                      {book.author}
                    </p>

                    <p className="mt-2.5 line-clamp-2 text-sm leading-relaxed text-[#5A635E]">
                      {book.synopsis}
                    </p>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="mt-5 flex items-center justify-between gap-2 border-t border-[#DED8CC] pt-4">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onStartReading(book, 0)}
                        className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#285245] px-4 py-2 text-xs font-medium text-[#FCFBF8] transition-colors hover:bg-[#1E3F35] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285245]"
                      >
                        <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Baca Daring</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => onOpenDetail(book)}
                        className="inline-flex min-h-[40px] items-center rounded-lg border border-[#DED8CC] bg-[#F7F5F0] px-3.5 py-2 text-xs font-medium text-[#1E2421] transition-colors hover:bg-[#EFECE4] whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        Detail
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => onToggleSave(book.id)}
                      aria-label={
                        isSaved
                          ? `Hapus ${book.title} dari Rak Baca`
                          : `Simpan ${book.title} ke Rak Baca`
                      }
                      title={isSaved ? 'Tersimpan di Rak Baca' : 'Simpan ke Rak Baca'}
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border transition-colors cursor-pointer ${
                        isSaved
                          ? 'border-[#285245] bg-[#285245]/10 text-[#285245]'
                          : 'border-[#DED8CC] bg-[#FCFBF8] text-[#5A635E] hover:bg-[#EFECE4] hover:text-[#1E2421]'
                      }`}
                    >
                      <Bookmark
                        className="h-4 w-4"
                        fill={isSaved ? 'currentColor' : 'none'}
                      />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
