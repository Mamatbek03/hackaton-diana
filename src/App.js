import React from "react";
import Cart from "./Cart";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      {/* <Cart /> */}
      <Navbar />
      <Footer />
      <MainRoutes />
    </div>
  );
};

export default App;
