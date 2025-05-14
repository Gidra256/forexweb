'use client';

import { ChakraProvider } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
} 