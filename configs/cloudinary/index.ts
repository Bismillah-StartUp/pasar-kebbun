import { v2 as cloudinary } from 'cloudinary';

if (!process.env.CLOUDINARY_API_KEY) {
  throw new Error('Missing Cloudinary configuration: CLOUDINARY_API_KEY is not set');
}

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default cloudinary;
