import { Article } from "../Article";
import styles from "../styles/productListPage.module.css";
import { Link, Outlet } from "react-router-dom";

interface Props {
  articles: Array<Article>;
}

export const ProductListPage = (props: Props) => {
  console.log(props.articles[0].id);
  return (
    <div className={styles.articlesContainer}>
      {props.articles.map((article) => (
        <Link to={`/sunglasses/${article.id}`} key={article.id}>
          <div className={styles.articleContainer}>
            <img
              src={article.imageURL}
              alt="article image"
              className={styles.articleImage}
            />
            <span>{article.title}</span>
            <span>{article.prize}€</span>
          </div>
        </Link>
      ))}
      <Outlet />
    </div>
  );
};
