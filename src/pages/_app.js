import "../styles/globals.css";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Saboarte</title>
        <meta name="description" content="Site modelo Uniplac" />
      </Head>
      <Header />
      <Component {...pageProps} className="min-h-screen" />
      <Footer />
    </div>
  );
}

export default MyApp;
