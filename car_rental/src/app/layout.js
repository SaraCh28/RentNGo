import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SplashProvider from "../components/SplashProvider";
 // ✅ NEW

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RentNGo",
  description: "Car rental made simple",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-black text-white antialiased`}>
        <SplashProvider >
          {children}
        </SplashProvider>
      </body>
    </html>
  );
}
