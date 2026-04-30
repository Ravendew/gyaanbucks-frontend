export type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  imageUrl?: string | null;
  category: string;
  tags?: string | null;
  metaTitle?: string | null;
  metaDesc?: string | null;
  isPublished: boolean;
  createdAt: string;
  updatedAt: string;
};

export const API_BASE_URL = 'http://192.168.1.7:5000';

export function getBlogImageUrl(imageUrl?: string | null) {
  if (!imageUrl) return '';

  return imageUrl.replace('http://localhost:5000', API_BASE_URL);
}

export async function getPublishedBlogs(): Promise<Blog[]> {
  const res = await fetch(`${API_BASE_URL}/blog/published`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return [];
  }

  return res.json();
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const res = await fetch(`${API_BASE_URL}/blog/slug/${slug}`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return null;
  }

  return res.json();
}
