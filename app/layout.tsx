import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://meulabs.org'),
  title: 'Meu Labs | Robotics, Coding & STEM for Kids in Sri Lanka',
  description: 'Project-based robotics, coding, STEM, AI, data and design learning for children and teens in Colombo, Sri Lanka.',
  openGraph: {
    images: ['/og-default.jpg']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
