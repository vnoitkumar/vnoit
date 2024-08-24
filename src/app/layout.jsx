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
    // images: "url",
  },
  twitter: {
    title: "Vnoit (Vinoth)",
    description: "Exploring tech trends, coding tips, and innovation insights.",
    card: "summary_large_image",
    creator: "@vnoitkumar",
    // images: "url",
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
