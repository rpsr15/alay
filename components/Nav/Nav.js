import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Nav.module.css";
import { BsHandbag } from "react-icons/bs";
import { IoLogoDesignernews, IoIosMenu, IoIosClose } from "react-icons/io";
import useCart from "../../hooks/use-cart";
import { animated, useTransition } from "react-spring";
import { Text } from "@nextui-org/react";
const Nav = () => {
  const { subtotal } = useCart();
  const [show, setShow] = useState(false);
  const transitions = useTransition(show, {
    from: { position: "fixed", opacity: 0, width: 0 },
    enter: { opacity: 1, width: 320 },
    leave: { opacity: 0, width: 0 },
  });
  const menuItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Shop",
      path: "/shop",
    },
    {
      label: "Editor",
      path: "/editor",
    },
    {
      label: "FAQs",
      path: "/faqs",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];
  const router = useRouter();
  return (
    <header className='sticky inset-x-0 left-0 top-0 z-50 bg-white group'>
      <div className='container px-4 py-3 mx-auto'>
        <div className='flex items-center justify-between'>
          <section className=' flex justify-start flex-1 '>
            <div className='inline-flex lg:hidden'>
              <button className='primary-mobile-navigation-toggle'>
                <IoIosMenu className='w-8 h-8' onClick={() => setShow(true)} />
              </button>
            </div>

            <div className='hidden text-gray-600 lg:flex'>
              <nav id='primary-desktop-navigation' className='flex flex-col lg:flex-row group'>
                {menuItems.map((menuItem) => {
                  return (
                    <Link key={menuItem.label} href={menuItem.path} >
                      <div
                       className={`${
                          router.pathname === menuItem.path ? "text-secondary-dark" : "text-tint-black"
                        }  hover:text-secondary-dark caret-transparent cursor-pointer whitespace-nowrap inline-flex items-center text-base font-medium bg-transparent focus:outline-none focus:underline  focus:cursor-pointer focus:text-gray-900 appearance-none mr-5`}> 
                        {menuItem.label}
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </section>
          <section className='flex-shrink-0 lock h-10 lg:h-16'>
            <a href='https://mywebsite.com'>
              <IoLogoDesignernews className='w-14 h-14 lg:hidden' />
              <IoLogoDesignernews className='hidden max-h-16 h-16 lg:block lg:w-full'></IoLogoDesignernews>
            </a>
          </section>
          <div className='flex justify-end flex-1'>
            <button
              id='header-cart-toggle'
              type='button'
              className='relative ml-2 text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500'
              aria-label='toggle menu'>
              <BsHandbag className='w-6 h-6' />
              <div className='absolute  w-4 h-4 p-0 m-0 font-mono text-xs leading-right text-center text-white rounded-full bg-black top-2 -right-2'>
                <span id='current_cart_count'>0</span>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div id='primary-mobile-navigation' className={`overflow-hidden bg-white`}>
        <div className='lg:hidden'>
          <div className={`fixed inset-0 z-40  ${show ? "flex" : "hidden"}`}>
            <div className='fixed inset-0 '>
              <div className='absolute inset-0 bg-gray-600 opacity-75'></div>
            </div>
            <div
              id='primary_mobile_navigation_wrapper'
              className='relative flex flex-col flex-1 w-full max-w-xs bg-white focus:outline-none '>
              <div className='flex-1 h- pt-5 pb-4 overflow-auto'>
                <nav>
                  <div className='navdropdownmobile'>
                    <div className='ml-10'>
                      <IoIosClose className='w-10 h-10' onClick={() => setShow(false)} />
                    </div>

                    <ul className='text-center mt-24'>
                      {menuItems.map((menuItem) => {
                        return (
                          <li className="leading-10 text-lg">
                            <div>{menuItem.label}</div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
