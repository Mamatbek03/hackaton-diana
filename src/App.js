import React from "react";

import Cart from "./Cart";
import Navbar from "./components/Navbar/Navbar";
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <div>
      {/* <Cart /> */}

      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
