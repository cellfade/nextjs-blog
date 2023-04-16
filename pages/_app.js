// `pages/_app.js`
import 'tailwindcss/tailwind.css'

import Navigation from "../components/navigation";
import Footer from "../components/footer";

function MyApp({Component, pageProps}) {
    return <>
            <Navigation/>
            <Component {...pageProps} />
            <Footer/>
    </>
}

export default MyApp
