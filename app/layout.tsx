import './globals.css';
import { Cardo, Karla, Tulpen_One } from 'next/font/google';

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cardo.variable} ${karla.variable} ${tulpenOne.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
