import './globals.css';

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
