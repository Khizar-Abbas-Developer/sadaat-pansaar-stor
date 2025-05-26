import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import ReduxToolkitProvider, {
  PersistGateProvider,
} from "@/redux/reduxProvider";
import NextTopLoader from "nextjs-toploader";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { IoLogoWhatsapp } from "react-icons/io5";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sadaat Pansaar Store",
  description: "Buy your favorite products from Sadaat Pansaar Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased mt-[110px]">
        <Toaster />
        <ReduxToolkitProvider>
          <PersistGateProvider>
            <Header />
            <Toaster />
            {/* Wrap children with main */}
            <NextTopLoader color="#5fa800" />
            <main>{children}</main>
            <a
              href="https://wa.link/vjj9nm"
              target="_blank"
              rel="noopener noreferrer"
              className="block lg:block fixed bottom-8 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
            >
              <IoLogoWhatsapp className="text-4xl" />
            </a>
          </PersistGateProvider>
          <Footer />
        </ReduxToolkitProvider>
        {/* Place the Footer outside of the page content */}
      </body>
    </html>
  );
}
