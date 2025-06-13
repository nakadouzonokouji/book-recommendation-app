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
  tags: string[];
  rating: number;
  genre: string;
}

export interface UserPreferences {
  genreId: string;
  selectedOptions: string[];
  tags: string[];
}