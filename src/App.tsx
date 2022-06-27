import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductListPage } from "./components/ProductListPage";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { Cart } from "./components/Cart";
import Home from "./Home";
import { Navbar } from "./components/Navbar";
import { ArticleContext } from "./ArticleContext";
import { mockArticles } from "./product-data";
import { CartContextProvider } from "./CartContext";

export interface Quantities {
  [articleID: string]: number;
}

export const App = () => {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Navbar />
        <ArticleContext.Provider value={mockArticles}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sunglasses" element={<ProductListPage />} />
            <Route
              path="sunglasses/:articleID"
              element={<ProductDetailPage />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Routes>
        </ArticleContext.Provider>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
