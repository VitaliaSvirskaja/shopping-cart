import styles from "../styles/productListPage.module.css";
import { Link, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ArticleContext } from "../ArticleContext";

export const ProductListPage = () => {
  const articles = useContext(ArticleContext);
  console.log(articles[0].id);
  return (
    <div className={styles.articlesContainer}>
      {articles.map((article) => (
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
