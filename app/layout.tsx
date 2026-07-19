import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Toaster } from "@/components/ui";
import { TooltipProvider } from "@/components/ui/tooltip";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pasar-kebbun.id"),
  title: {
    default: "Pasar Kebbun – Wisata Kuliner & Pasar Tradisional di Saronggi, Sumenep",
    template: "%s | Pasar Kebbun Sumenep",
  },
  description:
    "Pasar Kebbun: pasar rakyat berwawasan alam di Saronggi, Sumenep. Kuliner khas Madura, produk UMKM lokal, dan transaksi unik non-rupiah. Buka setiap Minggu 06.00–14.00 WIB.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: "Pasar Kebbun",
    title: "Pasar Kebbun – Wisata Kuliner & Pasar Tradisional di Saronggi, Sumenep",
    description:
      "Pasar rakyat berwawasan alam dengan konsep tempo dulu, kuliner khas Madura, produk UMKM lokal, dan sistem transaksi non-rupiah.",
    url: "https://www.pasar-kebbun.id",
    images: [
      {
        url: "/assets/images/landings/landing_one.png",
        width: 1200,
        height: 630,
        alt: "Pasar Kebbun - Wisata Kuliner & Pasar Tradisional Sumenep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pasar Kebbun – Wisata Kuliner & Pasar Tradisional di Saronggi, Sumenep",
    description:
      "Pasar rakyat berwawasan alam dengan konsep tempo dulu, kuliner khas Madura, produk UMKM lokal, dan sistem transaksi non-rupiah.",
    images: ["/assets/images/landings/landing_one.png"],
  },
  icons: {
    icon: "/assets/icons/logo-pk-white.png",
    apple: "/assets/icons/logo-pk-green.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
