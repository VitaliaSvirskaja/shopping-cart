import { Article } from "../Article";
import styles from "../styles/cart.module.css";
import IconButton from "@mui/material/IconButton";

interface Props {
  articlesInCart: Array<string>;
  articles: Array<Article>;
  onDeleteArticle: (articleID: string) => void;
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
          onDeleteArticle={props.onDeleteArticle}
        />
      ))}
    </div>
  );
};

interface Prop2 {
  articles: Array<Article>;
  articleID: string;
  onDeleteArticle: (articleID: string) => void;
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
          <IconButton
            size="small"
            onClick={() => {
              props.onDeleteArticle(article.id);
            }}
          >
            Delete
          </IconButton>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

// TODO Quantity form ergänzen + Logik
