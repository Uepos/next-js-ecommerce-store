import './global.scss';
import Header from '../components/header';
import styles from './layout.module.scss';

export const metadata = {
  title: {
    default: 'Global Shop',
    template: 'Global Shop | %s',
  },
  icons: {
    shortcut: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header>
          <Header />
        </header>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
