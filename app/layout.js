import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import ReduxToolkitProvider, {
  PersistGateProvider,
} from "@/redux/reduxProvider";
import NextTopLoader from "nextjs-toploader";
import { SpeedInsights } from "@vercel/speed-insights/next";
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
  description:
    "Buy your favorite organic herbal products from Sadaat Pansaar Store – trusted quality & fast delivery.",
  keywords:
    "Herbal Store, Organic Products, Sadaat Pansaar, Buy Herbs Online, Natural Remedies",
  openGraph: {
    title: "Sadaat Pansaar Store",
    description:
      "Buy your favorite organic herbal products from Sadaat Pansaar Store.",
    url: "https://www.sadaat-pansaar.store", // Replace with your actual domain
    type: "website",
    images: [
      {
        url: "https://www.sadaat-pansaar.store/_next/static/media/headerK.9457981b.jpeg", // Replace with your image URL
        width: 1200,
        height: 630,
        alt: "Sadaat Pansaar Store",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Sadaat Pansaar" />
        <link rel="canonical" href="https://www.sadaat-pansaar.store" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sadaat Pansaar Store" />
        <meta
          name="twitter:description"
          content="Buy your favorite organic herbal products from Sadaat Pansaar Store – trusted quality & fast delivery."
        />
        <meta
          name="twitter:image"
          content="https://www.sadaat-pansaar.store/_next/static/media/headerK.9457981b.jpeg"
        />
      </head>

      <body className="antialiased bg-white text-gray-900 mt-[110px]">
        <SpeedInsights />
        <Toaster />
        <ReduxToolkitProvider>
          <PersistGateProvider>
            <Header />
            <NextTopLoader color="#5fa800" />
            <main>{children}</main>
            <a
              href="https://wa.link/vjj9nm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="block fixed bottom-8 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
            >
              <IoLogoWhatsapp className="text-4xl" />
              <span className="sr-only">Chat with us on WhatsApp</span>
            </a>

            <Footer />
          </PersistGateProvider>
        </ReduxToolkitProvider>
      </body>
    </html>
  );
}
