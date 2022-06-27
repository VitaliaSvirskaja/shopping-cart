import styles from "../styles/cart.module.css";
import IconButton from "@mui/material/IconButton";
import { Quantities } from "../App";
import { useContext, useMemo } from "react";
import { ArticleContext } from "../ArticleContext";

interface Props {
  articlesInCart: Array<string>;
  onDeleteArticle: (articleID: string) => void;
  onChangeQuantity: (quantity: number, articleID: string) => void;
  quantities: Quantities;
}

export const Cart = (props: Props) => {
  const articles = useContext(ArticleContext);
  const finalPrize = useMemo<number>(() => {
    const articlePrizes: Array<number> = Object.entries(props.quantities).map(
      (entry) => {
        const [articleID, quantity] = entry;
        const article = articles.find((article) => article.id === articleID);
        return (article?.prize ?? 0) * quantity;
      }
    );
    return articlePrizes.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
  }, [props.quantities, articles]);

  return (
    <div>
      <h1>Cart</h1>
      {props.articlesInCart.map((articleID) => (
        <ArticleListElement
          key={articleID}
          articleID={articleID}
          onDeleteArticle={props.onDeleteArticle}
          onChangeQuantity={props.onChangeQuantity}
          quantities={props.quantities}
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
  quantities: Quantities;
}
const ArticleListElement = (props: Prop2) => {
  const articles = useContext(ArticleContext);
  const article = articles.find((article) => article.id === props.articleID);
  const quantity = props.quantities[props.articleID];
  const updatedPrize = (article?.prize ?? 1) * quantity;

  return (
    <>
      {article && (
        <div className={styles.articleListContainer}>
          <img
            src={article.imageURL}
            alt="article image"
            className={styles.articleImage}
          />
          <p>{article.title}</p>
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
                props.onChangeQuantity(
                  parseInt(event.target.value),
                  article.id
                );
              }}
            />
          </label>
          <IconButton
            size="small"
            onClick={() => {
              props.onDeleteArticle(article.id);
            }}
          >
            Delete
          </IconButton>
        </div>
      )}
    </>
  );
};
