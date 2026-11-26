import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import { CatalogBook } from '../types/library';

interface BookCoverProps {
  book: CatalogBook;
  className?: string;
}

const TONE_CLASSES: Record<CatalogBook['coverTone'], string> = {
  sage: 'bg-[#E5EBE7] text-[#1E3F35] border-[#C9D6CE]',
  bronze: 'bg-[#EDE6D8] text-[#5C3A1B] border-[#D7CAB4]',
  slate: 'bg-[#E4E9EC] text-[#233845] border-[#C7D1D8]',
  terracotta: 'bg-[#EFE4DC] text-[#6B331F] border-[#DCC5B6]',
};

export function BookCover({ book, className = '' }: BookCoverProps) {
  const [imgError, setImgError] = useState(false);

  if (book.coverImage && !imgError) {
    return (
      <div
        className={`relative aspect-[3/4] w-full overflow-hidden rounded-lg border border-[#DED8CC] bg-[#EFECE4] ${className}`}
      >
        <img
          src={book.coverImage}
          alt={`Sampul buku ${book.title}`}
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative flex aspect-[3/4] w-full flex-col justify-between overflow-hidden rounded-lg border p-5 ${TONE_CLASSES[book.coverTone]} ${className}`}
    >
      <div className="flex items-center justify-between border-b border-current/15 pb-3 text-[11px] font-mono tracking-wider uppercase opacity-80">
        <span>{book.callNumber}</span>
        <BookOpen className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      </div>

      <div className="my-auto py-4">
        <p className="text-[11px] font-medium tracking-wide opacity-75">
          {book.category}
        </p>
        <h4 className="mt-2 font-serif text-lg font-semibold leading-snug">
          {book.title}
        </h4>
      </div>

      <div className="border-t border-current/15 pt-3 text-xs opacity-85">
        <p className="truncate font-medium">{book.author}</p>
        <p className="mt-0.5 text-[11px] opacity-75">
          {book.publisher} · {book.year}
        </p>
      </div>
    </div>
  );
}
