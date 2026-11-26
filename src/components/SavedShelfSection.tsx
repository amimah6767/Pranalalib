import { Bookmark, BookOpen, Clock, Trash2 } from 'lucide-react';
import { LibraryWork, ReadingProgress } from '../types/library';

interface SavedShelfSectionProps {
  allWorks: LibraryWork[];
  savedIds: string[];
  readingHistory: ReadingProgress[];
  onToggleSave: (id: string) => void;
  onStartReading: (work: LibraryWork, chapterIndex?: number) => void;
  onOpenDetail: (work: LibraryWork) => void;
}

export function SavedShelfSection({
  allWorks,
  savedIds,
  readingHistory,
  onToggleSave,
  onStartReading,
  onOpenDetail,
}: SavedShelfSectionProps) {
  const savedWorks = allWorks.filter((w) => savedIds.includes(w.id));

  const recentReads = readingHistory
    .map((progress) => {
      const work = allWorks.find((w) => w.id === progress.itemId);
      return work ? { work, progress } : null;
    })
    .filter((entry): entry is { work: LibraryWork; progress: ReadingProgress } =>
      Boolean(entry)
    );

  return (
    <section
      id="rak-baca"
      className="border-t border-[#DED8CC] bg-[#F7F5F0] py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-[#DED8CC] pb-6">
          <p className="text-xs font-medium tracking-widest text-[#5A635E] uppercase">
            Ruang Personal Peramban
          </p>
          <h2 className="mt-1.5 font-serif text-2xl font-semibold text-[#1E2421] sm:text-3xl">
            Rak Baca &amp; Lanjutkan Membaca
          </h2>
          <p className="mt-1 text-sm text-[#5A635E]">
            Daftar buku simpanan dan riwayat baca terakhir tersimpan otomatis di
            perangkat Anda untuk dibuka kembali kapan saja.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Lanjutkan Membaca */}
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1E2421]">
              <Clock className="h-4 w-4 text-[#285245]" aria-hidden="true" />
              <h3>Terakhir Dibaca</h3>
            </div>

            {recentReads.length === 0 ? (
              <div className="mt-4 rounded-xl border border-[#DED8CC] bg-[#FCFBF8] p-6 text-sm text-[#5A635E]">
                Belum ada riwayat baca. Buka buku di katalog atau naskah di
                repositori untuk mulai membaca secara daring.
              </div>
            ) : (
              <div className="mt-4 space-y-3">
                {recentReads.slice(0, 4).map(({ work, progress }) => {
                  const sections =
                    work.kind === 'book' ? work.chapters : work.sections;
                  const currentChapter =
                    sections[progress.chapterIndex] ?? sections[0];
                  const totalCount = sections.length;

                  return (
                    <div
                      key={work.id}
                      className="flex flex-col justify-between gap-3 rounded-xl border border-[#DED8CC] bg-[#FCFBF8] p-4 sm:flex-row sm:items-center"
                    >
                      <div className="min-w-0">
                        <p className="text-xs text-[#5A635E] tabular-nums">
                          {work.kind === 'book' ? 'Buku Katalog' : work.type}
                          <span aria-hidden="true"> · </span>
                          Bagian {progress.chapterIndex + 1} dari {totalCount}
                        </p>
                        <button
                          type="button"
                          onClick={() => onOpenDetail(work)}
                          className="mt-1 block truncate text-left font-serif text-base font-semibold text-[#1E2421] hover:text-[#285245] cursor-pointer"
                        >
                          {work.title}
                        </button>
                        {currentChapter && (
                          <p className="mt-0.5 truncate text-xs text-[#5A635E]">
                            Terakhir: {currentChapter.number} —{' '}
                            {currentChapter.title}
                          </p>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() =>
                          onStartReading(work, progress.chapterIndex)
                        }
                        className="inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg bg-[#285245] px-4 py-2 text-xs font-medium text-[#FCFBF8] transition-colors hover:bg-[#1E3F35] whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Lanjutkan</span>
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Koleksi Tersimpan */}
          <div>
            <div className="flex items-center gap-2 text-sm font-semibold text-[#1E2421]">
              <Bookmark className="h-4 w-4 text-[#285245]" aria-hidden="true" />
              <h3>Tersimpan di Rak ({savedWorks.length})</h3>
            </div>

            {savedWorks.length === 0 ? (
              <div className="mt-4 rounded-xl border border-[#DED8CC] bg-[#FCFBF8] p-6 text-sm text-[#5A635E]">
                Anda belum menandai koleksi. Klik ikon penanda pada buku atau
                naskah untuk menyimpannya di daftar baca pribadi.
              </div>
            ) : (
              <div className="mt-4 space-y-3">
                {savedWorks.map((work) => (
                  <div
                    key={work.id}
                    className="flex flex-col justify-between gap-3 rounded-xl border border-[#DED8CC] bg-[#FCFBF8] p-4 sm:flex-row sm:items-center"
                  >
                    <div className="min-w-0">
                      <p className="text-xs text-[#5A635E] tabular-nums">
                        {work.kind === 'book' ? work.category : work.type}
                        <span aria-hidden="true"> · </span>
                        {work.year}
                      </p>
                      <button
                        type="button"
                        onClick={() => onOpenDetail(work)}
                        className="mt-1 block truncate text-left font-serif text-base font-semibold text-[#1E2421] hover:text-[#285245] cursor-pointer"
                      >
                        {work.title}
                      </button>
                      <p className="mt-0.5 truncate text-xs text-[#5A635E]">
                        {work.kind === 'book' ? work.author : work.authors}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => onStartReading(work, 0)}
                        className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-[#285245] bg-[#FCFBF8] px-3.5 py-2 text-xs font-medium text-[#285245] transition-colors hover:bg-[#285245] hover:text-[#FCFBF8] whitespace-nowrap cursor-pointer"
                      >
                        <span>Baca</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => onToggleSave(work.id)}
                        aria-label={`Hapus ${work.title} dari Rak Baca`}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#DED8CC] bg-[#F7F5F0] text-[#5A635E] hover:bg-[#EFECE4] hover:text-[#1E2421] cursor-pointer"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
