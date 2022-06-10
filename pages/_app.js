import { AuthContextProvider, MapDataContextProvider } from "../hooks/useAuth";
import "../styles/globals.css";
import 'semantic-ui-css/semantic.min.css'
function MyApp({ Component, pageProps }) {
  return (
      <AuthContextProvider>
        <MapDataContextProvider>
      <Component {...pageProps} />
      </MapDataContextProvider>
      </AuthContextProvider>
    
  );
}

export default MyApp;
