import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Bookmark,
  ChevronLeft,
  ChevronRight,
  List,
  Lock,
  Moon,
  Sun,
  Type,
  X,
} from 'lucide-react';
import {
  LibraryWork,
  ReaderFontSize,
  ReaderFontStyle,
  ReaderTheme,
} from '../types/library';

interface OnlineReaderModalProps {
  work: LibraryWork | null;
  chapterIndex: number;
  isSaved: boolean;
  onClose: () => void;
  onChangeChapter: (index: number) => void;
  onToggleSave: (id: string) => void;
}

const THEME_STYLES: Record<
  ReaderTheme,
  {
    shell: string;
    header: string;
    sidebar: string;
    prose: string;
    muted: string;
    border: string;
    surface: string;
    quote: string;
  }
> = {
  warm: {
    shell: 'bg-[#F7F5F0] text-[#1E2421]',
    header: 'bg-[#F7F5F0]/95 border-[#DED8CC]',
    sidebar: 'bg-[#EFECE4]/70 border-[#DED8CC]',
    prose: 'text-[#232926]',
    muted: 'text-[#5A635E]',
    border: 'border-[#DED8CC]',
    surface: 'bg-[#FCFBF8]',
    quote: 'text-[#285245]',
  },
  light: {
    shell: 'bg-[#FFFFFF] text-[#1A1D1B]',
    header: 'bg-[#FFFFFF]/95 border-[#E5E5E0]',
    sidebar: 'bg-[#F8F8F6] border-[#E5E5E0]',
    prose: 'text-[#1F2421]',
    muted: 'text-[#5F6662]',
    border: 'border-[#E5E5E0]',
    surface: 'bg-[#F8F8F6]',
    quote: 'text-[#285245]',
  },
  night: {
    shell: 'bg-[#171B19] text-[#E4E0D8]',
    header: 'bg-[#171B19]/95 border-[#2C332F]',
    sidebar: 'bg-[#1E2421] border-[#2C332F]',
    prose: 'text-[#DCD7CE]',
    muted: 'text-[#9DA6A0]',
    border: 'border-[#2C332F]',
    surface: 'bg-[#202623]',
    quote: 'text-[#8EC3AF]',
  },
};

const FONT_SIZE_CLASSES: Record<ReaderFontSize, string> = {
  sm: 'text-[15px] sm:text-base leading-[1.78]',
  md: 'text-base sm:text-[18px] leading-[1.82]',
  lg: 'text-lg sm:text-[20px] leading-[1.85]',
};

export function OnlineReaderModal({
  work,
  chapterIndex,
  isSaved,
  onClose,
  onChangeChapter,
  onToggleSave,
}: OnlineReaderModalProps) {
  const [theme, setTheme] = useState<ReaderTheme>('warm');
  const [fontStyle, setFontStyle] = useState<ReaderFontStyle>('serif');
  const [fontSize, setFontSize] = useState<ReaderFontSize>('md');
  const [tocOpenMobile, setTocOpenMobile] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [protectionNotice, setProtectionNotice] = useState<string | null>(null);

  const contentScrollRef = useRef<HTMLDivElement>(null);

  const triggerProtectionNotice = useCallback(() => {
    setProtectionNotice(
      'Koleksi Pranala Pustaka hanya dapat dibaca secara daring dan tidak tersedia untuk diunduh, dicetak, atau disalin.'
    );
  }, []);

  useEffect(() => {
    if (!protectionNotice) return;
    const timer = setTimeout(() => setProtectionNotice(null), 3600);
    return () => clearTimeout(timer);
  }, [protectionNotice]);

  // Lock body scroll & apply print protection class while reader is open
  useEffect(() => {
    if (!work) return;
    document.body.classList.add('reader-open');
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      if (
        (e.ctrlKey || e.metaKey) &&
        ['s', 'p', 'c', 'u'].includes(e.key.toLowerCase())
      ) {
        e.preventDefault();
        triggerProtectionNotice();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.classList.remove('reader-open');
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [work, onClose, triggerProtectionNotice]);

  // Reset scroll to top when switching chapter
  useEffect(() => {
    if (contentScrollRef.current) {
      contentScrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [chapterIndex, work?.id]);

  if (!work) return null;

  const sections = work.kind === 'book' ? work.chapters : work.sections;
  const safeIndex = Math.min(Math.max(chapterIndex, 0), sections.length - 1);
  const currentSection = sections[safeIndex];
  const progressPercent = Math.round(((safeIndex + 1) / sections.length) * 100);
  const t = THEME_STYLES[theme];

  return (
    <div
      className={`protected-reader-print-block fixed inset-0 z-50 flex flex-col ${t.shell} select-none`}
      role="dialog"
      aria-modal="true"
      aria-label={`Ruang Baca Daring: ${work.title}`}
      onContextMenu={(e) => {
        e.preventDefault();
        triggerProtectionNotice();
      }}
      onCopy={(e) => {
        e.preventDefault();
        triggerProtectionNotice();
      }}
      onCut={(e) => {
        e.preventDefault();
        triggerProtectionNotice();
      }}
      onDragStart={(e) => e.preventDefault()}
    >
      {/* Top Reader Toolbar */}
      <header
        className={`relative z-20 flex h-14 shrink-0 items-center justify-between gap-3 border-b px-3 backdrop-blur-sm sm:h-16 sm:px-6 ${t.header}`}
      >
        <div className="flex min-w-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup ruang baca"
            className={`inline-flex h-10 items-center gap-1.5 rounded-lg border px-3 text-xs font-medium transition-colors cursor-pointer ${t.border} ${t.surface} hover:opacity-85`}
          >
            <X className="h-4 w-4" />
            <span className="hidden sm:inline">Tutup</span>
          </button>

          <button
            type="button"
            onClick={() => setTocOpenMobile((prev) => !prev)}
            aria-label="Buka daftar isi"
            className={`inline-flex h-10 items-center gap-1.5 rounded-lg border px-3 text-xs font-medium transition-colors lg:hidden cursor-pointer ${t.border} ${t.surface}`}
          >
            <List className="h-4 w-4" />
            <span className="hidden sm:inline">Daftar Isi</span>
          </button>

          <div className="min-w-0 pl-1">
            <p className="truncate font-serif text-sm font-semibold sm:text-base">
              {work.title}
            </p>
            <p className={`truncate text-[11px] ${t.muted}`}>
              {currentSection.number} · {currentSection.title}
            </p>
          </div>
        </div>

        {/* Right Reader Controls (Strictly no download/print buttons) */}
        <div className="flex items-center gap-2 shrink-0">
          <span
            className={`hidden md:inline-flex items-center gap-1.5 text-xs ${t.muted} mr-2`}
          >
            <Lock className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Baca Daring Saja</span>
          </span>

          <div className="relative">
            <button
              type="button"
              onClick={() => setSettingsOpen((prev) => !prev)}
              aria-expanded={settingsOpen}
              aria-label="Pengaturan tampilan baca"
              className={`inline-flex h-10 items-center gap-1.5 rounded-lg border px-3 text-xs font-medium cursor-pointer ${t.border} ${t.surface}`}
            >
              <Type className="h-4 w-4" />
              <span className="hidden sm:inline">Tampilan</span>
            </button>

            {settingsOpen && (
              <div
                className={`absolute right-0 top-12 z-30 w-64 rounded-xl border p-4 shadow-lg ${t.border} ${t.surface}`}
              >
                <div>
                  <p className={`text-xs font-semibold ${t.muted}`}>
                    Tema Kenyamanan Mata
                  </p>
                  <div className="mt-2 grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setTheme('warm')}
                      className={`flex flex-col items-center gap-1 rounded-lg border py-2 text-[11px] font-medium cursor-pointer ${
                        theme === 'warm'
                          ? 'border-[#285245] bg-[#F7F5F0] text-[#1E2421]'
                          : `${t.border} opacity-80`
                      }`}
                    >
                      <Sun className="h-3.5 w-3.5" />
                      <span>Hangat</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTheme('light')}
                      className={`flex flex-col items-center gap-1 rounded-lg border py-2 text-[11px] font-medium cursor-pointer ${
                        theme === 'light'
                          ? 'border-[#285245] bg-white text-[#1E2421]'
                          : `${t.border} opacity-80`
                      }`}
                    >
                      <Sun className="h-3.5 w-3.5" />
                      <span>Terang</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTheme('night')}
                      className={`flex flex-col items-center gap-1 rounded-lg border py-2 text-[11px] font-medium cursor-pointer ${
                        theme === 'night'
                          ? 'border-[#8EC3AF] bg-[#171B19] text-[#E4E0D8]'
                          : `${t.border} opacity-80`
                      }`}
                    >
                      <Moon className="h-3.5 w-3.5" />
                      <span>Malam</span>
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <p className={`text-xs font-semibold ${t.muted}`}>
                    Gaya Huruf Bacaan
                  </p>
                  <div className="mt-2 grid grid-cols-2 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setFontStyle('serif')}
                      className={`rounded-lg border py-2 font-serif text-xs font-medium cursor-pointer ${
                        fontStyle === 'serif'
                          ? 'border-[#285245] bg-[#285245] text-[#FCFBF8]'
                          : t.border
                      }`}
                    >
                      Serif Sastra
                    </button>
                    <button
                      type="button"
                      onClick={() => setFontStyle('sans')}
                      className={`rounded-lg border py-2 font-sans text-xs font-medium cursor-pointer ${
                        fontStyle === 'sans'
                          ? 'border-[#285245] bg-[#285245] text-[#FCFBF8]'
                          : t.border
                      }`}
                    >
                      Sans Bersih
                    </button>
                  </div>
                </div>

                <div className="mt-4">
                  <p className={`text-xs font-semibold ${t.muted}`}>
                    Ukuran Teks
                  </p>
                  <div className="mt-2 grid grid-cols-3 gap-1.5">
                    {(
                      [
                        { id: 'sm', label: 'Kecil' },
                        { id: 'md', label: 'Sedang' },
                        { id: 'lg', label: 'Besar' },
                      ] as const
                    ).map((size) => (
                      <button
                        key={size.id}
                        type="button"
                        onClick={() => setFontSize(size.id)}
                        className={`rounded-lg border py-1.5 text-xs font-medium cursor-pointer ${
                          fontSize === size.id
                            ? 'border-[#285245] bg-[#285245] text-[#FCFBF8]'
                            : t.border
                        }`}
                      >
                        {size.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => onToggleSave(work.id)}
            aria-label={isSaved ? 'Hapus dari Rak Baca' : 'Simpan ke Rak Baca'}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border cursor-pointer ${
              isSaved
                ? 'border-[#285245] bg-[#285245] text-[#FCFBF8]'
                : `${t.border} ${t.surface}`
            }`}
          >
            <Bookmark
              className="h-4 w-4"
              fill={isSaved ? 'currentColor' : 'none'}
            />
          </button>
        </div>
      </header>

      {/* Thin Reading Progress Bar */}
      <div className={`h-[2px] w-full shrink-0 ${t.sidebar}`}>
        <div
          className="h-full bg-[#285245] transition-all duration-200"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Polite Protection Notice Toast */}
      {protectionNotice && (
        <div
          role="status"
          className="fixed bottom-5 left-1/2 z-40 flex max-w-md -translate-x-1/2 items-center gap-2.5 rounded-xl border border-[#285245] bg-[#1E2421] px-4 py-3 text-xs text-[#FCFBF8] shadow-lg"
        >
          <Lock className="h-4 w-4 shrink-0 text-[#8EC3AF]" aria-hidden="true" />
          <span>{protectionNotice}</span>
        </div>
      )}

      {/* Reader Body Split */}
      <div className="relative flex min-h-0 flex-1 overflow-hidden">
        {/* Desktop Persistent Chapter Sidebar */}
        <aside
          aria-label="Daftar bab dan bagian"
          className={`hidden w-72 shrink-0 overflow-y-auto border-r p-5 lg:block ${t.sidebar}`}
        >
          <p className={`text-xs font-medium tracking-widest uppercase ${t.muted}`}>
            Daftar Isi
          </p>
          <p className="mt-1 font-serif text-sm font-semibold">{work.title}</p>
          <p className={`mt-0.5 text-xs ${t.muted}`}>
            {work.kind === 'book' ? work.author : work.authors}
          </p>

          <nav className="mt-5 space-y-1">
            {sections.map((section, idx) => {
              const active = idx === safeIndex;
              return (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => onChangeChapter(idx)}
                  className={`flex w-full flex-col rounded-lg px-3 py-2.5 text-left transition-colors cursor-pointer ${
                    active
                      ? 'bg-[#285245] text-[#FCFBF8]'
                      : `hover:bg-black/5 dark:hover:bg-white/5`
                  }`}
                >
                  <span
                    className={`font-mono text-[11px] ${
                      active ? 'text-[#DCE9E4]' : t.muted
                    }`}
                  >
                    {section.number} · ~{section.durationMinutes} mnt
                  </span>
                  <span className="mt-0.5 text-xs font-medium leading-snug">
                    {section.title}
                  </span>
                </button>
              );
            })}
          </nav>

          <div
            className={`mt-6 rounded-xl border p-3.5 text-xs leading-relaxed ${t.border} ${t.surface} ${t.muted}`}
          >
            <p className="font-semibold">Akses Terproteksi</p>
            <p className="mt-1">
              Teks hanya ditampilkan untuk dibaca langsung di web. Fitur unduh,
              salin teks, dan cetak dinonaktifkan.
            </p>
          </div>
        </aside>

        {/* Mobile/Tablet Slide-Over TOC */}
        {tocOpenMobile && (
          <div
            className="fixed inset-0 z-30 flex bg-black/40 lg:hidden"
            onClick={() => setTocOpenMobile(false)}
          >
            <aside
              className={`h-full w-72 max-w-[82vw] overflow-y-auto border-r p-5 ${t.shell} ${t.border}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <p className="font-serif text-base font-semibold">Daftar Isi</p>
                <button
                  type="button"
                  onClick={() => setTocOpenMobile(false)}
                  aria-label="Tutup daftar isi"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-current/15 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <nav className="mt-4 space-y-1">
                {sections.map((section, idx) => {
                  const active = idx === safeIndex;
                  return (
                    <button
                      key={section.id}
                      type="button"
                      onClick={() => {
                        onChangeChapter(idx);
                        setTocOpenMobile(false);
                      }}
                      className={`flex w-full flex-col rounded-lg px-3 py-2.5 text-left cursor-pointer ${
                        active ? 'bg-[#285245] text-[#FCFBF8]' : ''
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] ${
                          active ? 'text-[#DCE9E4]' : t.muted
                        }`}
                      >
                        {section.number}
                      </span>
                      <span className="mt-0.5 text-sm font-medium">
                        {section.title}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </aside>
          </div>
        )}

        {/* Main Reading Canvas */}
        <div
          ref={contentScrollRef}
          className="flex-1 overflow-y-auto px-4 py-8 sm:px-8 sm:py-12"
          onClick={() => {
            if (settingsOpen) setSettingsOpen(false);
          }}
        >
          <article className="mx-auto max-w-[66ch]">
            <header className={`border-b pb-6 ${t.border}`}>
              <div className={`flex flex-wrap items-center gap-2 text-xs tabular-nums ${t.muted}`}>
                <span className="font-mono font-medium">
                  {work.kind === 'book' ? work.callNumber : work.repoCode}
                </span>
                <span aria-hidden="true">·</span>
                <span>{currentSection.number}</span>
                <span aria-hidden="true">·</span>
                <span>Estimasi {currentSection.durationMinutes} menit baca</span>
              </div>

              <h1 className="mt-3 font-serif text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                {currentSection.title}
              </h1>

              <p className={`mt-2 text-sm ${t.muted}`}>
                {work.kind === 'book' ? work.author : work.authors}
              </p>
            </header>

            {/* Reading Prose */}
            <div
              className={`mt-8 space-y-6 ${
                fontStyle === 'serif' ? 'font-serif' : 'font-sans'
              } ${FONT_SIZE_CLASSES[fontSize]} ${t.prose}`}
            >
              {currentSection.paragraphs.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className={
                    pIdx === 0
                      ? 'first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-5xl first-letter:font-semibold first-letter:leading-none'
                      : ''
                  }
                >
                  {paragraph}
                </p>
              ))}

              {currentSection.pullQuote && (
                <blockquote
                  className={`my-8 border-y py-5 text-center font-serif text-xl italic leading-relaxed sm:text-2xl ${t.border} ${t.quote}`}
                >
                  “{currentSection.pullQuote}”
                </blockquote>
              )}
            </div>

            {currentSection.footnote && (
              <footer
                className={`mt-10 border-t pt-4 text-xs leading-relaxed ${t.border} ${t.muted}`}
              >
                {currentSection.footnote}
              </footer>
            )}

            {/* Chapter Pagination */}
            <nav
              aria-label="Navigasi bab"
              className={`mt-12 flex flex-col gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between ${t.border}`}
            >
              <button
                type="button"
                disabled={safeIndex === 0}
                onClick={() => onChangeChapter(safeIndex - 1)}
                className={`inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg border px-4 py-2 text-xs font-medium transition-opacity cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 ${t.border} ${t.surface}`}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Bagian Sebelumnya</span>
              </button>

              <span className={`text-center font-mono text-xs tabular-nums ${t.muted}`}>
                {safeIndex + 1} / {sections.length}
              </span>

              {safeIndex < sections.length - 1 ? (
                <button
                  type="button"
                  onClick={() => onChangeChapter(safeIndex + 1)}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#285245] px-5 py-2 text-xs font-medium text-[#FCFBF8] transition-colors hover:bg-[#1E3F35] cursor-pointer"
                >
                  <span>Bagian Berikutnya</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onClose}
                  className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#285245] px-5 py-2 text-xs font-medium text-[#FCFBF8] transition-colors hover:bg-[#1E3F35] cursor-pointer"
                >
                  <span>Selesai Membaca</span>
                </button>
              )}
            </nav>
          </article>
        </div>
      </div>
    </div>
  );
}
