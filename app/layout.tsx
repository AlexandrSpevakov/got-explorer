import './globals.css';
import { Cardo, Karla, Tulpen_One } from 'next/font/google';

import Header from './components/Header';
import Footer from './components/Footer';

const cardo = Cardo({
  weight: ['400', '700'],
  variable: '--font-cardo',
});

const karla = Karla({
  variable: '--karla',
});

const tulpenOne = Tulpen_One({
  weight: '400',
  variable: '--tulpen',
});

export const metadata = {
  title: 'GOT Explorer',
  description: 'Explore the World of Ice and Fire',
  keywords: [
    'Game of Thrones, The Song of Ice & Fire',
    'Game of Thrones glossary',
    'Game of Thrones Characters',
    'Game of Thrones Houses',
    'Game of Thrones Dragons',
    'Game of Thrones wiki',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cardo.variable} ${karla.variable} ${tulpenOne.variable} scroll-smooth`}
    >
      <body className="bg-neutral-900 text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
