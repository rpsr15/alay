import Link from "next/link";
import { Icon } from "semantic-ui-react";
import { useState } from "react";
import styles from "./Nav.module.css";

import useCart from "../../hooks/use-cart";

const Nav = () => {
  const { subtotal } = useCart();
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav className='px-5 py-5 flex'>
      <div className='flex-none'>
        <Icon className='relative' name='cart' size='big' style={{ color: "#FCB08C" }} >
          <div className="absolute top-0 left-5 text-white text-base font-extrabold">
          2
          </div>
        </Icon>
      </div>

      <div className='flex-1 text-center'>Gannu</div>
      <button
        className='float-right'
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {/* icon from Heroicons.com */}
        <Icon name={`${isNavExpanded ? "cancel" : "bars"}`} size='large' />
      </button>
      <div className={`${styles.navigationMenu} ${isNavExpanded ? styles.expanded : ""}`}>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/shop'>Shop</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
          <li>
            <a href='/contact'>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
