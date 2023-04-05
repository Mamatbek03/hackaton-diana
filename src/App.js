import React from "react";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import CardContextProvider from "./contexts/CardContextProvider";
import CartContextProvider from "./contexts/CartContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./routes/MainRoutes";
import HomePage from "./Pages/HomePage/HomePage";
import AuthContextProvider from "./contexts/AuthContextProvider";

const App = () => {
  return (
    <CartContextProvider>
      <AuthContextProvider>
        <CardContextProvider>
          <ProductContextProvider>
            <Navbar />
            <MainRoutes />
            {/* <Footer /> */}
          </ProductContextProvider>
        </CardContextProvider>
      </AuthContextProvider>
    </CartContextProvider>
  );
};

export default App;
