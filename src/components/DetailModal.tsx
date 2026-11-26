import { useEffect, useState } from 'react';
import { Bookmark, BookOpen, Check, Copy, Lock, X } from 'lucide-react';
import { LibraryWork } from '../types/library';
import { BookCover } from './BookCover';

interface DetailModalProps {
  work: LibraryWork | null;
  isSaved: boolean;
  onClose: () => void;
  onToggleSave: (id: string) => void;
  onStartReading: (work: LibraryWork, chapterIndex: number) => void;
}

export function DetailModal({
  work,
  isSaved,
  onClose,
  onToggleSave,
  onStartReading,
}: DetailModalProps) {
  const [copiedCitation, setCopiedCitation] = useState(false);

  useEffect(() => {
    if (!work) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [work, onClose]);

  if (!work) return null;

  const sections = work.kind === 'book' ? work.chapters : work.sections;

  const handleCopyCitation = async () => {
    if (work.kind !== 'repository') return;
    try {
      await navigator.clipboard.writeText(work.citationApa);
      setCopiedCitation(true);
      setTimeout(() => setCopiedCitation(false), 2200);
    } catch {
      setCopiedCitation(true);
      setTimeout(() => setCopiedCitation(false), 2200);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1E2421]/50 p-3 backdrop-blur-[2px] sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="detail-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[#DED8CC] bg-[#FCFBF8] p-5 shadow-xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup detail koleksi"
          className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#DED8CC] bg-[#F7F5F0] text-[#1E2421] transition-colors hover:bg-[#EFECE4] cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-12">
          {work.kind === 'book' && (
            <div className="mx-auto w-44 sm:col-span-4 sm:mx-0 sm:w-full">
              <BookCover book={work} />
            </div>
          )}

          <div
            className={
              work.kind === 'book' ? 'sm:col-span-8 pr-8 sm:pr-10' : 'sm:col-span-12 pr-10'
            }
          >
            <p className="text-xs font-medium tracking-widest text-[#285245] uppercase">
              {work.kind === 'book' ? `Katalog Buku · ${work.category}` : `Repositori · ${work.type}`}
            </p>

            <h2
              id="detail-modal-title"
              className="mt-2 font-serif text-2xl font-semibold leading-snug text-[#1E2421] sm:text-3xl"
            >
              {work.title}
            </h2>

            {work.kind === 'book' && work.subtitle && (
              <p className="mt-1.5 text-sm leading-relaxed text-[#5A635E]">
                {work.subtitle}
              </p>
            )}

            <p className="mt-3 text-sm font-medium text-[#1E2421]">
              {work.kind === 'book' ? work.author : work.authors}
            </p>

            {/* Bibliographic Accession Metadata Grid */}
            <dl className="mt-5 divide-y divide-[#DED8CC] border-y border-[#DED8CC] text-xs sm:text-sm">
              <div className="flex justify-between gap-4 py-2.5">
                <dt className="text-[#5A635E]">
                  {work.kind === 'book' ? 'Nomor Panggil (DDC)' : 'Kode Repositori'}
                </dt>
                <dd className="font-mono font-medium text-[#1E2421] tabular-nums">
                  {work.kind === 'book' ? work.callNumber : work.repoCode}
                </dd>
              </div>

              <div className="flex justify-between gap-4 py-2.5">
                <dt className="text-[#5A635E]">
                  {work.kind === 'book' ? 'Penerbit' : 'Lembaga / Terbitan'}
                </dt>
                <dd className="text-right font-medium text-[#1E2421]">
                  {work.kind === 'book'
                    ? work.publisher
                    : `${work.institution} (${work.department})`}
                </dd>
              </div>

              <div className="flex justify-between gap-4 py-2.5">
                <dt className="text-[#5A635E]">Tahun &amp; Tebal</dt>
                <dd className="font-medium text-[#1E2421] tabular-nums">
                  {work.year} · {work.pages} halaman
                </dd>
              </div>

              {work.kind === 'book' && (
                <div className="flex justify-between gap-4 py-2.5">
                  <dt className="text-[#5A635E]">ISBN</dt>
                  <dd className="font-mono text-[#1E2421]">{work.isbn}</dd>
                </div>
              )}
            </dl>
          </div>
        </div>

        {/* Synopsis / Abstract */}
        <div className="mt-6">
          <h3 className="font-serif text-base font-semibold text-[#1E2421]">
            {work.kind === 'book' ? 'Ringkasan Buku' : 'Abstrak Penelitian'}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#5A635E]">
            {work.kind === 'book' ? work.synopsis : work.abstract}
          </p>
        </div>

        {/* Clickable Table of Contents */}
        <div className="mt-6">
          <h3 className="font-serif text-base font-semibold text-[#1E2421]">
            {work.kind === 'book' ? 'Daftar Bab Tersedia' : 'Struktur Naskah'}
          </h3>
          <ul className="mt-2.5 divide-y divide-[#DED8CC] rounded-xl border border-[#DED8CC] bg-[#F7F5F0]/70">
            {sections.map((section, idx) => (
              <li key={section.id}>
                <button
                  type="button"
                  onClick={() => onStartReading(work, idx)}
                  className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left transition-colors hover:bg-[#EFECE4] cursor-pointer"
                >
                  <div className="min-w-0">
                    <span className="font-mono text-xs font-medium text-[#285245]">
                      {section.number}
                    </span>
                    <p className="truncate text-sm font-medium text-[#1E2421]">
                      {section.title}
                    </p>
                  </div>
                  <span className="shrink-0 text-xs text-[#5A635E] tabular-nums">
                    ~{section.durationMinutes} mnt baca
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Online-only Policy Notice */}
        <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#DED8CC] bg-[#EFECE4]/70 p-4 text-xs leading-relaxed text-[#5A635E]">
          <Lock className="mt-0.5 h-4 w-4 shrink-0 text-[#285245]" aria-hidden="true" />
          <p>
            <strong className="font-semibold text-[#1E2421]">
              Layanan Baca Daring Saja:
            </strong>{' '}
            Demi menghormati hak cipta penulis dan penerbit, koleksi ini hanya
            dapat dibaca langsung di peramban web dan tidak tersedia untuk
            diunduh atau dicetak.
          </p>
        </div>

        {/* Footer Actions */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#DED8CC] pt-5">
          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => onToggleSave(work.id)}
              className={`inline-flex min-h-[42px] items-center gap-2 rounded-lg border px-4 py-2 text-xs font-medium transition-colors cursor-pointer ${
                isSaved
                  ? 'border-[#285245] bg-[#285245]/10 text-[#285245]'
                  : 'border-[#DED8CC] bg-[#F7F5F0] text-[#1E2421] hover:bg-[#EFECE4]'
              }`}
            >
              <Bookmark
                className="h-4 w-4"
                fill={isSaved ? 'currentColor' : 'none'}
              />
              <span>{isSaved ? 'Tersimpan di Rak' : 'Simpan ke Rak'}</span>
            </button>

            {work.kind === 'repository' && (
              <button
                type="button"
                onClick={handleCopyCitation}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-[#DED8CC] bg-[#F7F5F0] px-4 py-2 text-xs font-medium text-[#1E2421] hover:bg-[#EFECE4] cursor-pointer"
              >
                {copiedCitation ? (
                  <>
                    <Check className="h-4 w-4 text-[#285245]" />
                    <span className="text-[#285245]">Sitasi APA Disalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    <span>Salin Sitasi APA</span>
                  </>
                )}
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={() => onStartReading(work, 0)}
            className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#285245] px-6 py-2.5 text-sm font-medium text-[#FCFBF8] transition-colors hover:bg-[#1E3F35] sm:w-auto cursor-pointer"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            <span>Baca Daring Sekarang</span>
          </button>
        </div>
      </div>
    </div>
  );
}
