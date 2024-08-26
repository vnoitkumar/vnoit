import { Work_Sans } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Vnoit (Vinoth)",
  description: "Exploring tech trends, coding tips, and innovation insights.",
  openGraph: {
    title: "Vnoit (Vinoth)",
    description: "Exploring tech trends, coding tips, and innovation insights.",
    type: "website",
    siteName: "Vnoit",
    url: "https://vnoit.com",
    images: [
      {
        url: "/assets/images/og-image-3000x1500.jpg",
        width: 3000,
        height: 1500,
        alt: "Vnoit (Vinoth)",
      },
      {
        url: "/assets/images/og-image-1000x500.jpg",
        width: 1000,
        height: 500,
        alt: "Vnoit (Vinoth)",
      },
    ],
  },
  twitter: {
    title: "Vnoit (Vinoth)",
    description: "Exploring tech trends, coding tips, and innovation insights.",
    card: "summary_large_image",
    creator: "@vnoitkumar",
    url: "/assets/images/og-image-3000x1500.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={workSans.className}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
