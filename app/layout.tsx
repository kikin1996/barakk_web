import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barakk.cz - návrhy interiérů a nábytku",
  description: "Barakk.cz - návrhy interiérů a nábytku",
  icons: {
    icon: '/favicon.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

