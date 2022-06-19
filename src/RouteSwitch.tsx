import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductListPage } from "./components/ProductListPage";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { Cart } from "./components/Cart";
import App from "./App";
import { Navbar } from "./components/Navbar";
import { useState } from "react";
import { Article } from "./Article";
import { mockArticles } from "./product-data";

export const RouteSwitch = () => {
  const [articles, setArticles] = useState<Array<Article>>(mockArticles);
  const [articlesInCart, setArticlesInCart] = useState<Array<string>>([]);
  console.table(articles);

  function handleAddToCart(articleID: string) {
    const finalarticles = [...articlesInCart, articleID];
    setArticlesInCart(finalarticles);
  }

  function handleDelete(articleID: string) {
    const newArticles = articlesInCart.filter(
      (article) => article !== articleID
    );
    setArticlesInCart(newArticles);
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="sunglasses"
          element={<ProductListPage articles={articles} />}
        />
        <Route
          path="sunglasses/:articleID"
          element={
            <ProductDetailPage
              articles={articles}
              onAddToCart={handleAddToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              articles={articles}
              articlesInCart={articlesInCart}
              onDeleteArticle={handleDelete}
            />
          }
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
