import "../styles/globals.css";

//INTRNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";
import { NFTMarketplaceProvider } from "../Context/NFTMarketplaceContext";

const MyApp = ({ Component, pageProps }) => (
  <div>
    <NFTMarketplaceProvider>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </NFTMarketplaceProvider>
  </div>
);

export default MyApp;









// import "../styles/globals.css";

// //INTRNAL IMPORT
// import { Footer, NavBar } from "../components/componentsindex";

// const MyApp = ({ Component, pageProps }) => (
//   <div>
//     <NavBar />
//     <Component {...pageProps} />
//     <Footer />
//   </div>
// );

// export default MyApp;