export const CLOUDINARY_FOLDERS = {
  KULINER: 'pasar-kebbun/kuliner',
  BERITA: 'pasar-kebbun/berita',
  AVATARS: 'pasar-kebbun/avatars',
} as const;

export const CLOUDINARY_UPLOAD_OPTIONS = {
  KULINER: {
    folder: CLOUDINARY_FOLDERS.KULINER,
    resource_type: 'auto' as const,
    quality: 'auto' as const,
    fetch_format: 'auto' as const,
    width: 1200,
    height: 900,
    crop: 'fill' as const,
  },
  BERITA: {
    folder: CLOUDINARY_FOLDERS.BERITA,
    resource_type: 'auto' as const,
    quality: 'auto' as const,
    fetch_format: 'auto' as const,
    width: 1200,
    height: 630,
    crop: 'fill' as const,
  },
  AVATARS: {
    folder: CLOUDINARY_FOLDERS.AVATARS,
    resource_type: 'auto' as const,
    quality: 'auto' as const,
    fetch_format: 'auto' as const,
    width: 300,
    height: 300,
    crop: 'fill' as const,
    gravity: 'face' as const,
  },
} as const;
