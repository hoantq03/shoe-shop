import Logo from "./Logo";
import Title from "./Title";
import CartItem from "./CartItem";

export default function CartBox({ cartItems = [], onQuantityButton }) {
  let amount = 0;
  for (let item of cartItems) {
    amount += item.item.price * item.quantity;
  }

  return (
    <div className="cart-box">
      <div className="circle--box"></div>
      <div className="header-box">
        <Logo />
        <Title title={"Your Cart"} />
        <h3 className="price">$ {amount.toFixed(2)}</h3>
      </div>
      <div className="list--cartItems">
        {cartItems.map((cartItem) => {
          return (
            <CartItem
              key={cartItem.item.id}
              cartItem={cartItem}
              onQuantityButton={onQuantityButton}
            />
          );
        })}
      </div>
    </div>
  );
}
