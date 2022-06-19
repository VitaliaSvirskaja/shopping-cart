import { Article } from "../Article";
import styles from "../styles/cart.module.css";

interface Props {
  articlesInCart: Array<string>;
  articles: Array<Article>;
}

export const Cart = (props: Props) => {
  return (
    <div>
      <h1>Cart</h1>
      {props.articlesInCart.map((articleID) => (
        <ArticleListElement
          key={articleID}
          articles={props.articles}
          articleID={articleID}
        />
      ))}
    </div>
  );
};

interface Prop2 {
  articles: Array<Article>;
  articleID: string;
}
const ArticleListElement = (props: Prop2) => {
  const article = props.articles.find(
    (article) => article.id === props.articleID
  );
  return (
    <>
      {article ? (
        <div className={styles.articleListContainer}>
          <img
            src={article.imageURL}
            alt="article image"
            className={styles.articleImage}
          />
          <p>{article.title}</p>
          <p>{article.prize} €</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

// TODO Delete feature ergänzen
// TODO Quantity form ergänzen + Logik
