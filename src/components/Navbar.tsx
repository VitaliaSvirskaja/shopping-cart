import styles from "../styles/header.module.css";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../CartContext";

export const Navbar = () => {
  const { quantities } = useContext(CartContext);
  const quantityInCart = Object.values(quantities);
  const articleQuantityInCart = quantityInCart.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    0
  );
  return (
    <div>
      <nav>
        <div className="navbar-left">
          <Link to="/">
            <IconButton className="logo" size="small">
              Sunglasses4U
            </IconButton>
          </Link>
        </div>
        <div className="navbar-right">
          <Link to="/sunglasses">
            <IconButton className="sunglasses" size="small">
              Sunglasses
            </IconButton>
          </Link>
          <Link to="/cart">
            <img
              src="../../images/cart.png"
              alt="shopping cart"
              className={styles.shoppingCartIcon}
            />
            <p data-testid="navbarQuantity">
              {articleQuantityInCart === 0 ? "" : articleQuantityInCart}
            </p>
          </Link>
        </div>
      </nav>
    </div>
  );
};
