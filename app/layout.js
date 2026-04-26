import "./globals.css";

const siteUrl = "https://thorsush.com";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Sushil Thorat - Full Stack Developer",
    template: "%s | Sushil Thorat",
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
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-background text-white antialiased">{children}</body>
    </html>
  );
}
