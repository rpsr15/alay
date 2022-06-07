import { AuthContextProvider } from "../hooks/useAuth";
import "../styles/globals.css";
import 'semantic-ui-css/semantic.min.css'
function MyApp({ Component, pageProps }) {
  return (
      <AuthContextProvider>
      <Component {...pageProps} />
      </AuthContextProvider>
    
  );
}

export default MyApp;
