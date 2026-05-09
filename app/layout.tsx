import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shine Native - Ultimate Trading Bundle",
  description: "Master the stock market with institutional intelligence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>Shine Native - Ultimate Trading Bundle</title>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500;600&family=Public+Sans:wght@400&family=Work+Sans:wght@500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background text-on-background font-body-md min-h-screen flex flex-col pt-20">
        {children}
      </body>
    </html>
  );
}