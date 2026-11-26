import { useState } from 'react';
import { Bookmark, BookOpen, Check, Copy } from 'lucide-react';
import { RepositoryItem, RepositoryType } from '../types/library';

interface RepositorySectionProps {
  items: RepositoryItem[];
  selectedType: RepositoryType;
  onSelectType: (type: RepositoryType) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
  onOpenDetail: (item: RepositoryItem) => void;
  onStartReading: (item: RepositoryItem, sectionIndex?: number) => void;
  searchQuery: string;
  onClearSearch: () => void;
}

const REPO_TYPES: RepositoryType[] = [
  'Semua',
  'Jurnal Kajian',
  'Tesis',
  'Skripsi',
  'Monograf Riset',
  'Naskah Arsip',
];

export function RepositorySection({
  items,
  selectedType,
  onSelectType,
  savedIds,
  onToggleSave,
  onOpenDetail,
  onStartReading,
  searchQuery,
  onClearSearch,
}: RepositorySectionProps) {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopyCitation = async (item: RepositoryItem) => {
    try {
      await navigator.clipboard.writeText(item.citationApa);
      setCopiedId(item.id);
      setTimeout(() => setCopiedId((curr) => (curr === item.id ? null : curr)), 2200);
    } catch {
      // Fallback jika clipboard dibatasi
      setCopiedId(item.id);
      setTimeout(() => setCopiedId((curr) => (curr === item.id ? null : curr)), 2200);
    }
  };

  return (
    <section
      id="repositori"
      className="border-t border-[#DED8CC] bg-[#EFECE4]/55 py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 border-b border-[#DED8CC] pb-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-medium tracking-widest text-[#5A635E] uppercase">
              Arsip Ilmiah &amp; Karya Penelitian
            </p>
            <h2 className="mt-1.5 font-serif text-2xl font-semibold text-[#1E2421] sm:text-3xl">
              Repositori Daring
            </h2>
            <p className="mt-1 max-w-2xl text-sm text-[#5A635E]">
              Akses jurnal kajian, tesis, skripsi, monograf, dan transkripsi
              naskah arsip secara daring. Penyalinan hanya tersedia untuk
              format sitasi rujukan.
            </p>
          </div>
          <p className="font-mono text-xs text-[#5A635E] tabular-nums">
            {items.length} dokumen ditampilkan
          </p>
        </div>

        {/* Repository Type Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filter jenis dokumen repositori"
          className="mt-6 flex items-center gap-1.5 overflow-x-auto pb-2"
        >
          {REPO_TYPES.map((type) => {
            const isActive = selectedType === type;
            return (
              <button
                key={type}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSelectType(type)}
                className={`min-h-[40px] rounded-lg px-3.5 py-2 text-xs font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285245] ${
                  isActive
                    ? 'bg-[#285245] text-[#FCFBF8]'
                    : 'bg-[#FCFBF8] text-[#5A635E] border border-[#DED8CC] hover:bg-[#F7F5F0] hover:text-[#1E2421]'
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>

        {/* Repository List */}
        {items.length === 0 ? (
          <div className="mt-8 rounded-xl border border-[#DED8CC] bg-[#FCFBF8] p-10 text-center">
            <p className="font-serif text-lg font-medium text-[#1E2421]">
              Dokumen repositori tidak ditemukan
            </p>
            <p className="mt-1.5 text-sm text-[#5A635E]">
              {searchQuery
                ? `Tidak ada naskah yang cocok dengan "${searchQuery}".`
                : `Belum ada dokumen pada jenis ${selectedType}.`}
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              {selectedType !== 'Semua' && (
                <button
                  type="button"
                  onClick={() => onSelectType('Semua')}
                  className="rounded-lg border border-[#DED8CC] bg-[#F7F5F0] px-4 py-2 text-xs font-medium text-[#1E2421] hover:bg-[#EFECE4] cursor-pointer"
                >
                  Semua Jenis Dokumen
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
          <div className="mt-6 divide-y divide-[#DED8CC] rounded-xl border border-[#DED8CC] bg-[#FCFBF8]">
            {items.map((item) => {
              const isSaved = savedIds.includes(item.id);
              const isCopied = copiedId === item.id;

              return (
                <article
                  key={item.id}
                  className="p-5 sm:p-6 transition-colors hover:bg-[#F7F5F0]/60"
                >
                  <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-start">
                    <div className="min-w-0 flex-1">
                      {/* Clean Unboxed Metadata Line */}
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-[#5A635E] tabular-nums">
                        <span className="font-mono font-medium text-[#285245]">
                          {item.repoCode}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-medium text-[#1E2421]">
                          {item.type}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{item.year}</span>
                        <span aria-hidden="true">·</span>
                        <span>{item.pages} hlm</span>
                      </div>

                      <h3 className="mt-2 font-serif text-lg font-semibold leading-snug text-[#1E2421] sm:text-xl">
                        <button
                          type="button"
                          onClick={() => onOpenDetail(item)}
                          className="text-left hover:text-[#285245] transition-colors cursor-pointer"
                        >
                          {item.title}
                        </button>
                      </h3>

                      <p className="mt-1.5 text-sm text-[#1E2421]">
                        {item.authors}
                        <span className="text-[#5A635E]">
                          {' '}
                          — {item.institution}
                        </span>
                      </p>

                      <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-[#5A635E]">
                        {item.abstract}
                      </p>

                      <p className="mt-3 text-xs text-[#5A635E]">
                        <span className="font-medium text-[#1E2421]">
                          Kata kunci:{' '}
                        </span>
                        {item.keywords.join(' · ')}
                      </p>
                    </div>

                    {/* Action Column */}
                    <div className="flex flex-wrap items-center gap-2 lg:flex-col lg:items-end lg:shrink-0">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onStartReading(item, 0)}
                          className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#285245] px-4 py-2 text-xs font-medium text-[#FCFBF8] transition-colors hover:bg-[#1E3F35] whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          <BookOpen className="h-3.5 w-3.5" aria-hidden="true" />
                          <span>Baca Naskah</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => onOpenDetail(item)}
                          className="inline-flex min-h-[40px] items-center rounded-lg border border-[#DED8CC] bg-[#F7F5F0] px-3.5 py-2 text-xs font-medium text-[#1E2421] transition-colors hover:bg-[#EFECE4] whitespace-nowrap shrink-0 cursor-pointer"
                        >
                          Detail
                        </button>

                        <button
                          type="button"
                          onClick={() => onToggleSave(item.id)}
                          aria-label={
                            isSaved
                              ? `Hapus ${item.title} dari Rak Baca`
                              : `Simpan ${item.title} ke Rak Baca`
                          }
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

                      <button
                        type="button"
                        onClick={() => handleCopyCitation(item)}
                        className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-[#5A635E] transition-colors hover:bg-[#EFECE4] hover:text-[#1E2421] whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        {isCopied ? (
                          <>
                            <Check
                              className="h-3.5 w-3.5 text-[#285245]"
                              aria-hidden="true"
                            />
                            <span className="text-[#285245]">
                              Sitasi APA Disalin
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                            <span>Salin Sitasi APA</span>
                          </>
                        )}
                      </button>
                    </div>
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
