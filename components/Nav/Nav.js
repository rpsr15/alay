import Link from 'next/link';
import { Icon } from 'semantic-ui-react';

import styles from './Nav.module.css';

import { useCart } from '../../hooks/use-cart.js';

const Nav = () => {
  const { subtotal } = useCart();
  return (
    <nav className={styles.nav}>
      <p className={styles.navTitle}>
        <Link href="/">
          <a>Space Jelly Shop</a>
        </Link>
      </p>
      <p className={styles.navCart}>
        <Link href="/cart">
          <a>
            <Icon name='shopping cart' /> ${subtotal.toFixed(2)}
          </a>
        </Link>
      </p>
    </nav>
  )
}

export default Nav;