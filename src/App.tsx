import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ProductListPage } from "./components/ProductListPage";
import { ProductDetailPage } from "./components/ProductDetailPage";
import { Cart } from "./components/Cart";
import Home from "./Home";
import { Navbar } from "./components/Navbar";
import { useContext, useState } from "react";
import { ArticleContext } from "./ArticleContext";

export interface Quantities {
  [articleID: string]: number;
}

export const App = () => {
  const [articlesInCart, setArticlesInCart] = useState<Array<string>>(["A"]);
  const [quantities, setQuantities] = useState<Quantities>({ A: 3 });
  const articles = useContext(ArticleContext);

  function handleAddToCart(articleID: string) {
    if (articlesInCart.includes(articleID)) {
      const updatedQuantities = {
        ...quantities,
        [articleID]: quantities[articleID] + 1,
      };
      setQuantities(updatedQuantities);
    } else {
      const finalArticles = [...articlesInCart, articleID];
      setArticlesInCart(finalArticles);
      const updatedQuantities = { ...quantities, [articleID]: 1 };
      setQuantities(updatedQuantities);
    }
  }

  function handleDelete(articleID: string) {
    const newArticles = articlesInCart.filter(
      (article) => article !== articleID
    );
    setArticlesInCart(newArticles);
    const { [articleID]: removedQuantity, ...remainingQuantities } = quantities;
    setQuantities(remainingQuantities);
  }

  function handleQuantityChange(quantity: number, articleID: string) {
    const updatedQuantities = { ...quantities, [articleID]: quantity };
    setQuantities(updatedQuantities);
  }

  return (
    <BrowserRouter>
      <Navbar quantities={quantities} />
      <ArticleContext.Provider value={articles}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="sunglasses" element={<ProductListPage />} />
          <Route
            path="sunglasses/:articleID"
            element={<ProductDetailPage onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                articlesInCart={articlesInCart}
                onDeleteArticle={handleDelete}
                onChangeQuantity={handleQuantityChange}
                quantities={quantities}
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
      </ArticleContext.Provider>
    </BrowserRouter>
  );
};

export default App;
