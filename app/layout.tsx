import type { Metadata } from "next";
import { Cinzel, Open_Sans, Parisienne } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { IMAGE_BASE_URL } from "./pictures";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
});
const parisienne = Parisienne({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-parisienne",
  display: "swap",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const description =
  "Lifestyle photography for families, couples, friends, students, and pets. Capturing love, life, and laughter.";

export const metadata: Metadata = {
  title: {
    default: "Lisa Marie Photography | Lifestyle Photography",
    template: "%s | Lisa Marie Photography",
  },
  description,
  openGraph: {
    title: "Lisa Marie Photography",
    description,
    type: "website",
    images: [`${IMAGE_BASE_URL}/carousel/photo-2.jpg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${parisienne.variable} ${openSans.variable}`}
    >
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
