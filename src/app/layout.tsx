import './globals.css';
// import './fonts.css';
import localFont from 'next/font/local';
import styles from './layout.module.css';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
import { StoreProvider } from '@/store/store-provider';

export const metadata = {
  title: 'Ticket finder',
  description: 'Movie ticket search apps',
};

const roboto = localFont({
  src: [
    {
      path: '../assets/fonts/roboto/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/roboto/Roboto-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../assets/fonts/roboto/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <StoreProvider>
        <body className={roboto.className}>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </body>
      </StoreProvider>
    </html>
  );
}
