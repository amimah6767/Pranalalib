interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-[#DED8CC] bg-[#EFECE4]/70 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
          <div className="max-w-md">
            <p className="font-serif text-lg font-semibold text-[#1E2421]">
              Pranala Pustaka
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#5A635E]">
              Perpustakaan digital dan repositori ilmiah yang mengutamakan
              kenyamanan membaca daring serta perlindungan hak cipta penulis dan
              penerbit. Seluruh koleksi tersedia untuk dibaca langsung di web
              tanpa layanan unduh berkas.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-[#5A635E]">
            <button
              type="button"
              onClick={() => onNavigate('beranda')}
              className="hover:text-[#1E2421] cursor-pointer"
            >
              Beranda
            </button>
            <button
              type="button"
              onClick={() => onNavigate('katalog')}
              className="hover:text-[#1E2421] cursor-pointer"
            >
              Katalog Buku
            </button>
            <button
              type="button"
              onClick={() => onNavigate('repositori')}
              className="hover:text-[#1E2421] cursor-pointer"
            >
              Repositori Ilmiah
            </button>
            <button
              type="button"
              onClick={() => onNavigate('rak-baca')}
              className="hover:text-[#1E2421] cursor-pointer"
            >
              Rak Baca Saya
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-2 border-t border-[#DED8CC] pt-6 text-xs text-[#5A635E] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Pranala Pustaka. Hak cipta koleksi tetap milik masing-masing penulis dan lembaga penerbit.</p>
          <p>Kebijakan Akses: Baca Daring Saja (Tanpa Unduh)</p>
        </div>
      </div>
    </footer>
  );
}
