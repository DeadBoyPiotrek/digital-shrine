import { Poppins } from '@next/font/google';
import { Footer } from './components/footer/Footer';
import { MobileNavigation } from './components/nav/mobileNavigation/MobileNavigation';
import { Nav } from './components/nav/Nav';
import { Providers } from './components/providers/providers';
import './styles/globals.scss';
const font = Poppins({
  weight: ['400', '500', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={font.className} lang="en">
      <head>
        <title>Digital Shrine</title>
        <meta name="description" content="Blog about coding and stuff" />
        <meta name="viewport" content="width=device-width" />
      </head>
      <body>
        <Providers>
          <Nav />
          {children}
          <Footer />
          <MobileNavigation />
        </Providers>
      </body>
    </html>
  );
}
