import { createContext, PropsWithChildren, useState } from "react";
import { Quantities } from "./App";

interface CartContextInterface {
  quantities: Quantities;
  articlesInCart: Array<string>;
  onDeleteArticle: (articleID: string) => void;
  onChangeQuantity: (quantity: number, articleID: string) => void;
  onAddToCart: (articleID: string) => void;
}

export const CartContext = createContext<CartContextInterface>({
  quantities: { A: 3 },
  articlesInCart: ["A"],
  onDeleteArticle: () => {},
  onChangeQuantity: () => {},
  onAddToCart: () => {},
});

export const CartContextProvider = ({ children }: PropsWithChildren) => {
  const [articlesInCart, setArticlesInCart] = useState<Array<string>>(["A"]);
  const [quantities, setQuantities] = useState<Quantities>({ A: 3 });
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

  return (
    <CartContext.Provider
      value={{
        articlesInCart: articlesInCart,
        quantities: quantities,
        onDeleteArticle: handleDelete,
        onChangeQuantity: handleQuantityChange,
        onAddToCart: handleAddToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
