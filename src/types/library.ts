export type BookCategory =
  | 'Semua'
  | 'Arsitektur & Ruang'
  | 'Ekologi & Lingkungan'
  | 'Sastra & Sejarah'
  | 'Filsafat & Sains'
  | 'Sosial & Budaya';

export type RepositoryType =
  | 'Semua'
  | 'Jurnal Kajian'
  | 'Tesis'
  | 'Skripsi'
  | 'Monograf Riset'
  | 'Naskah Arsip';

export interface ReadingSection {
  id: string;
  number: string;
  title: string;
  durationMinutes: number;
  paragraphs: string[];
  pullQuote?: string;
  footnote?: string;
}

export interface CatalogBook {
  id: string;
  kind: 'book';
  title: string;
  subtitle: string;
  author: string;
  publisher: string;
  year: number;
  pages: number;
  isbn: string;
  callNumber: string;
  category: Exclude<BookCategory, 'Semua'>;
  coverImage?: string;
  coverTone: 'sage' | 'bronze' | 'slate' | 'terracotta';
  synopsis: string;
  chapters: ReadingSection[];
}

export interface RepositoryItem {
  id: string;
  kind: 'repository';
  repoCode: string;
  type: Exclude<RepositoryType, 'Semua'>;
  title: string;
  authors: string;
  institution: string;
  department: string;
  year: number;
  pages: number;
  abstract: string;
  keywords: string[];
  citationApa: string;
  sections: ReadingSection[];
}

export type LibraryWork = CatalogBook | RepositoryItem;

export interface ReadingProgress {
  itemId: string;
  kind: 'book' | 'repository';
  chapterIndex: number;
  lastReadAt: string;
}

export type ReaderTheme = 'warm' | 'light' | 'night';
export type ReaderFontStyle = 'serif' | 'sans';
export type ReaderFontSize = 'sm' | 'md' | 'lg';
