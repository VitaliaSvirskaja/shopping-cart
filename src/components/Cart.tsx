import styles from "../styles/cart.module.css";
import IconButton from "@mui/material/IconButton";
import { useContext, useMemo } from "react";
import { ArticleContext } from "../ArticleContext";
import { CartContext } from "../CartContext";

export const Cart = () => {
  const { articlesInCart, onDeleteArticle, quantities, onChangeQuantity } =
    useContext(CartContext);
  const articles = useContext(ArticleContext);
  const finalPrize = useMemo<number>(() => {
    const articlePrizes: Array<number> = Object.entries(quantities).map(
      (entry) => {
        const [articleID, quantity] = entry;
        const foundArticle = articles.find(
          (article) => article.id === articleID
        );
        return (foundArticle?.prize ?? 0) * quantity;
      }
    );
    return articlePrizes.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  }, [quantities, articles]);

  return (
    <div>
      <h1>Cart</h1>
      {articlesInCart.map((articleID) => (
        <ArticleListElement
          key={articleID}
          articleID={articleID}
          onDeleteArticle={onDeleteArticle}
          onChangeQuantity={onChangeQuantity}
        />
      ))}
      <div data-testid="finalPrize" className={styles.finalPrizeContainer}>
        Final Prize: {finalPrize} €
      </div>
    </div>
  );
};

interface Prop2 {
  articleID: string;
  onDeleteArticle: (articleID: string) => void;
  onChangeQuantity: (quantity: number, articleID: string) => void;
}
const ArticleListElement = (props: Prop2) => {
  const { quantities, onChangeQuantity, onDeleteArticle } =
    useContext(CartContext);
  const articles = useContext(ArticleContext);
  const foundArticle = articles.find(
    (article) => article.id === props.articleID
  );
  const quantity = quantities[props.articleID];
  const updatedPrize = (foundArticle?.prize ?? 1) * quantity;

  return (
    <>
      {foundArticle && (
        <div className={styles.articleListContainer}>
          <img
            src={foundArticle.imageURL}
            alt="article image"
            className={styles.articleImage}
          />
          <p>{foundArticle.title}</p>
          <p>{updatedPrize} €</p>
          <label>
            Quantity:
            <input
              type="number"
              name="quantity"
              id="quantity"
              data-testid="quantityInput"
              min={1}
              defaultValue={quantity ?? 1}
              onChange={(event) => {
                onChangeQuantity(parseInt(event.target.value), foundArticle.id);
              }}
            />
          </label>
          <IconButton
            size="small"
            onClick={() => {
              onDeleteArticle(foundArticle.id);
            }}
          >
            Delete
          </IconButton>
        </div>
      )}
    </>
  );
};
