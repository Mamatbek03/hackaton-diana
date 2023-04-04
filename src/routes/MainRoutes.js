import { Card } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "../components/AboutUs/AboutUs";
import Auth from "../components/Auth/Auth";
import Cart from "../components/Cart/Cart";
import Contacts from "../components/Contacts/Contacts";
import FormOrder from "../components/FormOrder/FormOrder";
import Logo from "../components/Logo/Logo";
import ProductList from "../components/Products/ProductList/ProductList";
import PaymentForm from "../LinkCard";
import AdminPage from "../Pages/AdminPage/AdminPage";
import EditProductPage from "../Pages/EditProductPage/EditProductPage";
import HomePage from "../Pages/HomePage/HomePage";
import NotFoundPage from "../Pages/NotFoundPage/NotFoundPage";
import ProductDetailsPage from "../Pages/ProductDetailsPage/ProductDetailsPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/products", element: <ProductList />, id: 1 },
    { link: "/aboutUs", element: <AboutUs />, id: 2 },
    { link: "/contacts", element: <Contacts />, id: 3 },
    { link: "/admin-page", element: <AdminPage />, id: 4 },
    { link: "/", element: <HomePage />, id: 5 },
    { link: "/edit/:id", element: <EditProductPage />, id: 6 },
    { link: "/cart", element: <Cart />, id: 7 },
    { link: "/details/:id", element: <ProductDetailsPage />, id: 8 },
    { link: "/form-order", element: <FormOrder />, id: 8 },
    { link: "/card", element: <PaymentForm />, id: 9 },
    { link: "/auth", element: <Auth />, id: 10 },
    { link: "*", element: <NotFoundPage />, id: 11 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
