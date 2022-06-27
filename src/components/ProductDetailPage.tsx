import { Link, useParams } from "react-router-dom";
import styles from "../styles/productListPage.module.css";
import { useContext, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import { ArticleContext } from "../ArticleContext";

interface Props {
  onAddToCart: (articleID: string) => void;
}

export const ProductDetailPage = (props: Props) => {
  useEffect(() => {
    console.log("Mount PDP");
  }, []);
  const articles = useContext(ArticleContext);
  let params = useParams();
  const article = articles.find((article) => params.articleID === article.id);
  console.log(params);

  return (
    <>
      {article ? (
        <div>
          <img
            src={article.imageURL}
            alt="article image"
            className={styles.articleImage}
          />
          <span>{article.title}</span>
          <span>{article.prize}€</span>
          <Link to="/cart">
            <IconButton
              size="small"
              onClick={() => props.onAddToCart(article.id)}
            >
              Add to Cart
            </IconButton>
          </Link>
          <Link to="/sunglasses">
            <IconButton size="small">Back to Sunglasses</IconButton>
          </Link>
        </div>
      ) : (
        <div>There is no article with this number!</div>
      )}
    </>
  );
};
