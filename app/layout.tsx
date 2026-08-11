import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "The Southern Clinic",
  description:
    "The Southern Clinic has been a trusted pillar of family-oriented healthcare, serving patients in Clovelly Park and the surrounding areas since 1950.",
  // Same set the live site declares: 32x32, 192x192 and apple-touch, all favicon.png
  icons: {
    icon: [
      { url: "/images/favicon.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon.png", sizes: "192x192", type: "image/png" },
    ],
    apple: { url: "/images/favicon.png" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Same web fonts the live WordPress site loads */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Montserrat:wght@300;400;500;600;700&family=Inter:wght@400;500;600;700&family=Raleway:wght@400;500;600;700&family=Open+Sans:wght@400;500;600&display=swap"
        />
      </head>
      <body>
        {/* The live site scrolls natively — no smooth-scroll library, no sticky header. */}
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
