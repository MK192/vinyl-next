export interface Vinyl {
  id: string;
  title: string;
  artist: string;
  price: number;
  genre: string;
  year: number;
  description: string;
  coverImage: string;
  tracklist: string[];
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  email: string;
  bio?: string | null;
  avatarUrl?: string | null;
  createdAt: Date | string;
}

export interface Collection {
  id: string;
  name: string;
  description?: string | null;
  createdAt: Date | string;
  updatedAt: Date | string;
}
