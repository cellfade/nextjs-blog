// `pages/_app.js`
import '../styles/global.css';
import 'tailwindcss/tailwind.css'
import Navigation from "../components/Navigation";

function MyApp({ Component, pageProps }) {
  return (
          <>
            <Navigation/>
            <Component {...pageProps} />
          </>
        )
}

export default MyApp
