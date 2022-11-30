import { Roboto } from '@next/font/google';
import { Footer } from './footer/Footer';
import { Nav } from './nav/Nav';
import { Providers } from './providers';
import './styles/globals.scss';

const font = Roboto({
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${font.className}`}>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
