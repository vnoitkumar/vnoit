import { Work_Sans } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Vnoit",
  description: "Exploring tech trends, coding tips, and innovation insights.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
