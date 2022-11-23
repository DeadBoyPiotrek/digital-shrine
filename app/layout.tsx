import { Cormorant } from '@next/font/google';
import '../styles/globals.css';
import { Footer } from './footer/Footer';
import { Nav } from './nav/Nav';
import { Providers } from './providers';
const font = Cormorant();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={font.className}>
        <Providers>
          <Nav />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
