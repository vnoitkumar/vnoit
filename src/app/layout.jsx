import { Work_Sans } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://vnoit.vercel.app"),
  title: "Vinoth (Vnoit)",
  description: "Exploring tech trends, coding tips, and innovation insights.",
  openGraph: {
    title: "Vinoth (Vnoit)",
    description: "Exploring tech trends, coding tips, and innovation insights.",
    type: "website",
    siteName: "Vnoit",
    url: "https://vnoit.vercel.app",
    images: [
      {
        url: "/assets/images/og-image-3600x1890.jpg",
        width: 3600,
        height: 1890,
        alt: "Vinoth (Vnoit)",
      },
      {
        url: "/assets/images/og-image-1800x945.jpg",
        width: 1800,
        height: 945,
        alt: "Vinoth (Vnoit)",
      },
      {
        url: "/assets/images/og-image-1200x630.jpg",
        width: 1200,
        height: 630,
        alt: "Vinoth (Vnoit)",
      },
    ],
  },
  twitter: {
    title: "Vinoth (Vnoit)",
    description: "Exploring tech trends, coding tips, and innovation insights.",
    card: "summary_large_image",
    creator: "@vnoitkumar",
    url: "/assets/images/og-image-3600x1890.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={workSans.className}>
      <body>
        <Header />
        <main className="min-h-[calc(100vh-400px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
