export interface Genre {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
}

export interface Option {
  id: string;
  text: string;
  tags: string[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl?: string;
  amazonUrl: string;
  kindleUrl?: string;
  asin: string; // Amazon Standard Identification Number
  kindleAsin?: string; // Kindle版のASIN（異なる場合）
  tags: string[];
  rating: number;
  genre: string;
  price?: number; // API経由で取得する価格
  availability?: string; // 在庫状況
  publishDate?: string; // 発売日（YYYY-MM-DD形式）
}

export interface UserPreferences {
  genreId: string;
  selectedOptions: string[];
  tags: string[];
}