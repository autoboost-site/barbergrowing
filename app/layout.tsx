import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barber Growing | Premium Villa Barber Service in Bali",
  description: "Premium mobile barber service for villas in Bali. Rio brings the barbershop experience to your doorstep. Canggu, Seminyak, Uluwatu & beyond.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
