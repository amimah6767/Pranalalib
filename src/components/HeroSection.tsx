import { Search, X } from 'lucide-react';
import { useState } from 'react';
import { HERO_LIBRARY_IMAGE } from '../data/libraryData';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  totalBooks: number;
  totalRepoItems: number;
  onExploreCatalog: () => void;
  onExploreRepository: () => void;
}

export function HeroSection({
  searchQuery,
  onSearchChange,
  totalBooks,
  totalRepoItems,
  onExploreCatalog,
  onExploreRepository,
}: HeroSectionProps) {
  const [heroImgError, setHeroImgError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onExploreCatalog();
  };

  return (
    <section
      id="beranda"
      className="border-b border-[#DED8CC] bg-[#F7F5F0] py-10 sm:py-14 lg:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Editorial Column */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="text-xs font-medium tracking-widest text-[#5A635E] uppercase">
                Perpustakaan Digital &amp; Repositori Daring
              </p>

              <h1 className="mt-3 font-serif text-3xl font-semibold leading-[1.15] tracking-tight text-[#1E2421] sm:text-4xl lg:text-5xl">
                Ruang Baca Daring yang Tenang untuk Buku dan Karya Ilmiah
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#5A635E] sm:text-lg">
                Pranala Pustaka menghimpun katalog buku pilihan serta repositori
                karya ilmiah yang dapat ditelusuri kapan saja. Seluruh koleksi
                disajikan untuk dibaca langsung di peramban demi kenyamanan mata
                dan perlindungan hak cipta—tanpa berkas unduhan.
              </p>

              {/* Unified Search Bar */}
              <form
                onSubmit={handleSubmit}
                className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
              >
                <div className="relative flex-1">
                  <Search
                    className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#5A635E]"
                    aria-hidden="true"
                  />
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    placeholder="Cari judul buku, penulis, topik, atau kode repositori..."
                    aria-label="Cari koleksi katalog dan repositori"
                    className="h-12 w-full rounded-lg border border-[#DED8CC] bg-[#FCFBF8] pl-10 pr-10 text-sm text-[#1E2421] placeholder:text-[#7B847F] focus:border-[#285245] focus:outline-none focus:ring-2 focus:ring-[#285245]/20"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => onSearchChange('')}
                      aria-label="Hapus kata kunci pencarian"
                      className="absolute right-2.5 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md text-[#5A635E] hover:bg-[#EFECE4] hover:text-[#1E2421] cursor-pointer"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-lg bg-[#285245] px-6 text-sm font-medium text-[#FCFBF8] transition-colors duration-150 hover:bg-[#1E3F35] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285245]"
                >
                  Telusuri Koleksi
                </button>
              </form>

              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
                <button
                  type="button"
                  onClick={onExploreCatalog}
                  className="font-medium text-[#285245] underline decoration-[#285245]/40 underline-offset-4 transition-colors hover:text-[#1E3F35] hover:decoration-[#1E3F35] cursor-pointer"
                >
                  Jelajahi {totalBooks} Katalog Buku
                </button>
                <span aria-hidden="true" className="text-[#DED8CC]">
                  ·
                </span>
                <button
                  type="button"
                  onClick={onExploreRepository}
                  className="font-medium text-[#285245] underline decoration-[#285245]/40 underline-offset-4 transition-colors hover:text-[#1E3F35] hover:decoration-[#1E3F35] cursor-pointer"
                >
                  Buka {totalRepoItems} Naskah Repositori
                </button>
              </div>
            </div>

            {/* Operational Utility Strip */}
            <div className="mt-8 border-t border-[#DED8CC] pt-4 text-xs text-[#5A635E] sm:text-sm">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                <span className="font-medium text-[#1E2421]">
                  Layanan Daring 24 Jam
                </span>
                <span aria-hidden="true">·</span>
                <span>Baca Langsung di Web (Tanpa Unduh)</span>
                <span aria-hidden="true">·</span>
                <span>Nyaman di Ponsel, Tablet &amp; Laptop</span>
              </div>
            </div>
          </div>

          {/* Right Photographic Anchor */}
          <div className="lg:col-span-5">
            <figure className="flex h-full flex-col overflow-hidden rounded-xl border border-[#DED8CC] bg-[#FCFBF8]">
              {!heroImgError ? (
                <div className="relative aspect-[16/10] w-full flex-1 overflow-hidden bg-[#EFECE4] lg:aspect-auto lg:min-h-[340px]">
                  <img
                    src={HERO_LIBRARY_IMAGE}
                    alt="Suasana ruang baca perpustakaan yang tenang dengan cahaya alami dan rak buku kayu"
                    referrerPolicy="no-referrer"
                    onError={() => setHeroImgError(true)}
                    className="h-full w-full object-cover"
                  />
                </div>
              ) : (
                <div className="flex min-h-[260px] flex-1 flex-col items-center justify-center bg-[#EFECE4] p-8 text-center">
                  <p className="font-serif text-xl font-semibold text-[#1E2421]">
                    Pranala Pustaka
                  </p>
                  <p className="mt-2 max-w-xs text-sm text-[#5A635E]">
                    Ruang baca digital berarsitektur tenang untuk penelitian dan
                    literasi terbuka.
                  </p>
                </div>
              )}
              <figcaption className="border-t border-[#DED8CC] bg-[#FCFBF8] px-4 py-3 text-xs text-[#5A635E]">
                Ruang baca daring Pranala Pustaka — teks tertata rapi dengan
                pengaturan tema kertas hangat dan mode malam lembut.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
