import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CardContextProvider from "./contexts/CardContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <CartContextProvider>
      <CardContextProvider>
        <ProductContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </ProductContextProvider>
      </CardContextProvider>
    </CartContextProvider>
  );
};

export default App;
