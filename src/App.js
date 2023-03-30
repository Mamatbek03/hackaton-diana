import React from "react";
import Cart from "./Cart";
import Navbar from "./components/Navbar/Navbar";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <ProductContextProvider>
      {/* <Cart /> */}
      <Navbar />
      <MainRoutes />
    </ProductContextProvider>
  );
};

export default App;
