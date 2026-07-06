import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_USER,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export interface CloudinaryUploadResult {
  publicId: string;
  url: string;
}

export async function uploadImage(file: File, folder: string): Promise<CloudinaryUploadResult> {
  const buffer = Buffer.from(await file.arrayBuffer());

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: `pasar-kebbun/${folder}` },
      (error, result) => {
        if (error || !result) {
          reject(error ?? new Error('Upload ke Cloudinary gagal.'));
          return;
        }
        resolve({ publicId: result.public_id, url: result.secure_url });
      }
    );
    uploadStream.end(buffer);
  });
}

export async function deleteImage(publicId: string): Promise<void> {
  await cloudinary.uploader.destroy(publicId);
}
