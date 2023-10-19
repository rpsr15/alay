import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { BsHandbag } from "react-icons/bs";
import { IoLogoDesignernews, IoIosMenu, IoIosClose } from "react-icons/io";
import useCart from "../../hooks/use-cart";
import { Navbar } from "@nextui-org/react";
const Nav = () => {
  const { subtotal } = useCart();

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    console.log(router.asPath);
    if (router.asPath === "/editor") {
      console.log("HERE", router.asPath);
      document.body.classList.add("noscroll");
    } else {
      document.body.classList.remove("noscroll");
    }
    if (isSideMenuOpen === true) {
      ToggleSideMenu();
    }
  }, [router]);

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
  const ToggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  return (
    <Navbar isBordered variant={"sticky"} style={{ zIndex: "5000" }}>
      <Navbar.Content showIn='xs'>
        <Navbar.Toggle aria-label='toggle navigation' showIn='xs' />
      </Navbar.Content>
      <Navbar.Brand>
        <a href='/' className='mr-2'>
          <IoLogoDesignernews className='w-14 h-14 lg:hidden' />
          <IoLogoDesignernews className='hidden max-h-16 h-16 lg:block lg:w-full'></IoLogoDesignernews>
        </a>
        <div>Alay</div>
      </Navbar.Brand>

      <Navbar.Content hideIn='xs' className='grow-0 basis-auto'>
        {menuItems.map((item, index) => (
          <Navbar.Link href={item.path}>{item.label}</Navbar.Link>
        ))}
      </Navbar.Content>

      <Navbar.Content className='grow-0 basis-auto'>
        <Navbar.Link color='inherit' href='#'>
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
        </Navbar.Link>
      </Navbar.Content>

      <Navbar.Collapse>
        {menuItems.map((item, index) => (
          <Navbar.CollapseItem key={item.label}>
            <Link href={item.path}>{item.label}</Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
