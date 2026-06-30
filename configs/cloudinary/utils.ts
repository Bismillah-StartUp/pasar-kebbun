import cloudinary from './index';
import { CLOUDINARY_UPLOAD_OPTIONS } from './constants';
import type { CloudinaryUploadResponse, CloudinaryTransformations } from './types';

type UploadType = keyof typeof CLOUDINARY_UPLOAD_OPTIONS;

export const uploadImage = async (
  file: Buffer | string,
  uploadType: UploadType = 'KULINER'
): Promise<CloudinaryUploadResponse> => {
  const uploadOptions = CLOUDINARY_UPLOAD_OPTIONS[uploadType];

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      uploadOptions,
      (error, result) => {
        if (error) reject(error);
        else if (result) resolve(result as unknown as CloudinaryUploadResponse);
        else reject(new Error('Upload failed: no result returned'));
      }
    );

    if (typeof file === 'string') {
      uploadStream.end(Buffer.from(file, 'base64'));
    } else {
      uploadStream.end(file);
    }
  });
};

export const deleteImage = async (publicId: string): Promise<{ result: string }> =>
  cloudinary.uploader.destroy(publicId);

export const getImageUrl = (
  publicId: string,
  transformations?: CloudinaryTransformations
): string =>
  cloudinary.url(publicId, { secure: true, ...transformations });
