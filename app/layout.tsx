import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Loft Kolasiński - projektowanie wnętrz i mebli",
  description: "Loft Kolasiński - projektowanie wnętrz i mebli",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

