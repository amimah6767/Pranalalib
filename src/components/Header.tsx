import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  savedCount: number;
  onNavigate: (sectionId: string) => void;
  onStartFeaturedReading: () => void;
}

export function Header({
  activeSection,
  savedCount,
  onNavigate,
  onStartFeaturedReading,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'beranda', label: 'Beranda' },
    { id: 'katalog', label: 'Katalog Buku' },
    { id: 'repositori', label: 'Repositori' },
    { id: 'rak-baca', label: savedCount > 0 ? `Rak Baca (${savedCount})` : 'Rak Baca' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#DED8CC] bg-[#F7F5F0]/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-element Brand Wordmark */}
        <a
          href="#beranda"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('beranda');
          }}
          className="font-serif text-xl font-semibold tracking-tight text-[#1E2421] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#285245]"
        >
          Pranala Pustaka
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Navigasi utama"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#5A635E]"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`relative py-1 transition-colors duration-150 whitespace-nowrap shrink-0 hover:text-[#1E2421] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#285245] ${
                  isActive
                    ? 'text-[#1E2421] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#285245]'
                    : ''
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: 1 Primary Action + Mobile Menu Button */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onStartFeaturedReading}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#285245] px-4 py-2 text-sm font-medium text-[#FCFBF8] transition-colors duration-150 hover:bg-[#1E3F35] whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285245]"
          >
            Mulai Membaca
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#DED8CC] bg-[#FCFBF8] text-[#1E2421] transition-colors hover:bg-[#EFECE4] md:hidden cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#285245]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-[#DED8CC] bg-[#FCFBF8] px-4 py-4 md:hidden">
          <nav aria-label="Navigasi seluler" className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#EFECE4] text-[#285245] font-semibold'
                      : 'text-[#1E2421] hover:bg-[#F7F5F0]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onStartFeaturedReading();
              }}
              className="mt-2 flex min-h-[44px] w-full items-center justify-center rounded-lg bg-[#285245] px-4 py-2.5 text-sm font-medium text-[#FCFBF8] hover:bg-[#1E3F35] cursor-pointer"
            >
              Mulai Membaca
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
