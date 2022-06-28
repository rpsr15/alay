import { AuthContextProvider } from "../hooks/useAuth";
import { MapDataContextProvider } from '../hooks/useMapData'
import "../styles/globals.css";
import 'semantic-ui-css/semantic.min.css'
import Nav from '../components/Nav'
function MyApp({ Component, pageProps }) {
  return (
      <AuthContextProvider>
        <MapDataContextProvider>
          <Nav/>
      <main>
      <Component {...pageProps} />
      </main>
      </MapDataContextProvider>
      </AuthContextProvider>
    
  );
}

export default MyApp;
