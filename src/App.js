import React from "react";
import Cart from "./Cart";
import Navbar from "./components/Navbar/Navbar";
import CardContextProvider from "./contexts/CardContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <CardContextProvider>
      <ProductContextProvider>
        {/* <Cart /> */}
        <Navbar />
        <MainRoutes />
      </ProductContextProvider>
    </CardContextProvider>
  );
};

export default App;
