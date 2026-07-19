import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Pasar Kebbun",
    short_name: "Pasar Kebbun",
    description: "Wisata Kuliner, Budaya, dan Alam Pasar Kebbun",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#036403",
    icons: [
      {
        src: "/assets/icons/logo-pk-green.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/icons/logo-pk-green.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
