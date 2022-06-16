import { BrowserRouter, Routes, Route } from "react-router-dom";

import { PLP } from "./components/PLP";
import { PDP } from "./components/PDP";
import { Cart } from "./components/Cart";
import App from "./App";

export const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sunglasses" element={<PLP />} />
        <Route path="/PDP" element={<PDP />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
