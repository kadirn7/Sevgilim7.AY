import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import AppShell from "@/components/AppShell";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "İyi ki Varsın Aşkım ❤️",
  description: "Senin için özel hazırlanmış romantik bir sürpriz — 7. ayımız kutlu olsun.",
  openGraph: {
    title: "İyi ki Varsın Aşkım ❤️",
    description: "Senin için özel hazırlanmış romantik bir sürpriz.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0612",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${playfair.variable} ${cormorant.variable} h-full`}
    >
      <body className="min-h-full bg-[#0a0612] text-pink-50 antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
