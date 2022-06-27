import { Link, useParams } from "react-router-dom";
import styles from "../styles/productListPage.module.css";
import { useContext, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import { ArticleContext } from "../ArticleContext";
import { CartContext } from "../CartContext";

export const ProductDetailPage = () => {
  const { onAddToCart } = useContext(CartContext);
  useEffect(() => {
    console.log("Mount PDP");
  }, []);
  const articles = useContext(ArticleContext);
  let params = useParams();
  const foundArticle = articles.find(
    (article) => params.articleID === article.id
  );
  console.log(params);

  return (
    <>
      {foundArticle ? (
        <div>
          <img
            src={foundArticle.imageURL}
            alt="article image"
            className={styles.articleImage}
          />
          <span>{foundArticle.title}</span>
          <span>{foundArticle.prize}€</span>
          <Link to="/cart">
            <IconButton
              size="small"
              onClick={() => onAddToCart(foundArticle.id)}
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
