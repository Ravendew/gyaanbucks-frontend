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

// ✅ PRODUCTION BACKEND URL
export const API_BASE_URL =
  'https://gyaanbucks-backend-production.up.railway.app';

// ✅ Image URL fix (VERY IMPORTANT for Railway)
export function getBlogImageUrl(imageUrl?: string | null) {
  if (!imageUrl) return '';

  // replace both localhost + old IP
  return imageUrl
    .replace('http://localhost:5000', API_BASE_URL)
    .replace('http://192.168.1.7:5000', API_BASE_URL);
}

// ✅ GET ALL BLOGS
export async function getPublishedBlogs(): Promise<Blog[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/blog/published`, {
      cache: 'no-store',
    });

    if (!res.ok) return [];

    return res.json();
  } catch (err) {
    console.error('Blog fetch error:', err);
    return [];
  }
}

// ✅ GET SINGLE BLOG
export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`${API_BASE_URL}/blog/slug/${slug}`, {
      cache: 'no-store',
    });

    if (!res.ok) return null;

    return res.json();
  } catch (err) {
    console.error('Blog fetch error:', err);
    return null;
  }
}
