import React from "react";
import Cart from "./Cart";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ProductContextProvider from "./contexts/ProductContextProvider";
import HomePage from "./Pages/HomePage/HomePage";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <ProductContextProvider>
      {/* <Cart /> */}
      <Navbar />
      <HomePage />
      <MainRoutes />
      <Footer />
    </ProductContextProvider>
  );
};

export default App;
