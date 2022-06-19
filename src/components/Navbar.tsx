import styles from "../styles/header.module.css";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
          </Link>
        </div>
      </nav>
    </div>
  );
};
