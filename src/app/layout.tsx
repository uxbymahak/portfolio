import Script from 'next/script';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
// import './src.js';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mahak Saxena - Personal Portfolio',
  description: 'Mahak Saxena - Freelancer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={inter.className}>
        {children}
        <Script
          src="https://raw.githubusercontent.com/HubSpot/odometer/v0.4.6/odometer.min.js"
          strategy="afterInteractive" // Loads early
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.3/gsap.min.js"
          strategy="beforeInteractive" // Loads early
        />
        <Script src="/assets/js/matter.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/matter-custom.js" strategy="afterInteractive" />
        <Script src="/assets/js/index.js" strategy="afterInteractive" />
        <Script
          src="https://code.jquery.com/jquery-3.6.0.min.js"
          strategy="afterInteractive" // Loads early
        />
      </body>
    </html>
  );
}