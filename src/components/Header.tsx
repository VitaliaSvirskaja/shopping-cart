interface Props {}

export const Header = (props: Props) => {
  return (
    <div>
      <div className="logo">Sunglasses4U</div>
      <div className="sunglasses">Sunglasses</div>
      <div className="shoppingCart">
        <img src="../../images/cart.png" alt="shopping cart" />
      </div>
    </div>
  );
};
