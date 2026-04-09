import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TimberShop",
  description: "A beginner woodworking site focused on practical, no-fluff learning.",
  metadataBase: new URL("https://example.com")
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
