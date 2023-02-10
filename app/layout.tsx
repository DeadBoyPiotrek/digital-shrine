import { Footer } from '@/components/footer/Footer';
import { MobileNavigation } from '@/components/nav/mobileNavigation/MobileNavigation';
import { Nav } from '@/components/nav/Nav';
import { Providers } from '@/components/providers/providers';
import ScrollUp from '@/lib/pageScrollFix';
import { Poppins } from '@next/font/google';
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Providers>
          <ScrollUp />
          <Nav />
          {children}
          <Footer />
          <MobileNavigation />
        </Providers>
      </body>
    </html>
  );
}
