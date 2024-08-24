import { Work_Sans } from "next/font/google";
import Footer from "@/components/footer";
import Header from "@/components/header";
import "./globals.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | Vnoit",
    default: "Vnoit",
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
