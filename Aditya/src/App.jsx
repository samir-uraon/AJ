import React from "react";
import RouterPage from "./RouterPage.jsx"
import ErrorPage from "./components/ErrorPage.jsx"
import ShopDetails from "./components/ShopDetails.jsx"
import BuyGold from "./components/BuyGold.jsx"

import { createBrowserRouter ,RouterProvider} from "react-router-dom";

export default function App() {

 
  

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouterPage />,
  },
    {
    path: "/shop-details",
    element: <ShopDetails />,
  },
    {
    path: "/buy-gold",
    element: <BuyGold />,
  },
    {
    path: "/*",
    element: <ErrorPage />,
  },
]);

  return <RouterProvider router={router} />;
}
