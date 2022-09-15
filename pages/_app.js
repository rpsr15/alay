import "../styles/globals.css";
import { AuthContextProvider } from "../hooks/useAuth";
import { MapDataContextProvider } from "../hooks/useMapData";
import CartContext from "../context/cart-context";
import useCartContext from "../hooks/use-cart-context";
import Nav from "../components/Nav";
import NavSidebar from "../components/NavSidebar";
import Footer from "../components/Footer";
import { createTheme, Text, NextUIProvider } from "@nextui-org/react";

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      // primary: '#d5eaec',
      // you can also create your own color
      warning: "#d5eaec",
      myDarkColor: "#FF0000",
      grayAccent: "#7a8c8c",
      darkAccent: "#2f2e2e",
    },
    space: {},
    fonts: {},
  },
});

function MyApp({ Component, pageProps }) {
  const cart = useCartContext();
  return (
    <AuthContextProvider>
      <MapDataContextProvider>
        <CartContext.Provider value={cart}>
          <NextUIProvider theme={theme}>
            <div className='announcement-container bg-red-500'>
            </div>
            <Nav />
            <main className=''>
              <Component {...pageProps} />
            </main>
            <Footer />
          </NextUIProvider>
        </CartContext.Provider>
      </MapDataContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
