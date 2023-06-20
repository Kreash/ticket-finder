import './globals.css';

export const metadata = {
  title: 'Ticket finder',
  description: 'Movie ticket search apps',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
