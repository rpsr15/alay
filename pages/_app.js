import { AuthContextProvider } from "../hooks/useAuth";
import { MapDataContextProvider } from "../hooks/useMapData";
import "../styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import CartContext from "../context/cart-context";
import useCartContext from "../hooks/use-cart-context";
import Nav from "../components/Nav";
import NavSidebar from "../components/NavSidebar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  const cart = useCartContext();
  return (
    <AuthContextProvider>
      <MapDataContextProvider>
        <CartContext.Provider value={cart}>

            <Nav />
            <main>
              <Component {...pageProps} />
            </main>
         <Footer/>
        </CartContext.Provider>
      </MapDataContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
