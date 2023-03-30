import React from "react";
import Cart from "./Cart";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <ProductContextProvider>
      {/* <Cart /> */}
      <Navbar />
      <Footer />
      <MainRoutes />
    </ProductContextProvider>
  );
};

export default App;
