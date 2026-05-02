import Script from "next/script";
import ThemeProvider from "../components/ThemeProvider";
import "./globals.css";

const siteUrl = "https://www.thorsush.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Sushil Thorat - Full Stack Developer",
    template: "%s | Sushil Thorat",
  },

  alternates: {
    canonical: "/",
  },

  description:
    "Developer specializing in high-performance APIs, secure payment systems, and cloud-native applications.",

  openGraph: {
    title: "Sushil Thorat - Full Stack Developer",
    description:
      "Developer specializing in high-performance APIs, secure payment systems, and cloud-native applications.",
    url: siteUrl,
    siteName: "Sushil Thorat",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og_image.png",
        width: 1200,
        height: 630,
        alt: "Sushil Thorat Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sushil Thorat - Full Stack Developer",
    description:
      "Developer specializing in high-performance APIs, secure payment systems, and cloud-native applications.",
    images: ["/og_image.png"],
  },

  icons: {
    icon: "/favicon.svg",
  },
};
const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sushil Thorat",
  url: "https://thorsush.com",
  jobTitle: "Full Stack Developer",
  sameAs: [
    "https://linkedin.com/in/sushil-thorat-1999-",
    "https://github.com/thorsush",
  ],
  knowsAbout: [
    "Go",
    "Backend Development",
    "Payment Systems",
    "AWS",
    "Distributed Systems",
    "MERN Stack",
    "PSQL",
  ],
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          id="person-schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />
      </head>

      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
