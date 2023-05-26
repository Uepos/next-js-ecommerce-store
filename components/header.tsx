import Link from 'next/link';
import styles from './header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/#" />
        </div>
        <nav>
          <div className={styles.nav}>
            <Link href="/" className={styles.navItem}>
              Home
            </Link>
            <Link href="/About Playverse" className={styles.navItem}>
              About PlayVerse
            </Link>
            <Link
              href="/products"
              data-test-id="products-link"
              className={styles.navItem}
            >
              Shop
            </Link>
            <Link
              href="/cart"
              data-test-id="cart-link"
              className={styles.navItem}
            >
              🛒
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
