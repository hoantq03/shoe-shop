export default function CartItem({ cartItem, onQuantityButton }) {
  return (
    <div className="cart--item">
      <div
        className="wrapper--cartItem__image"
        style={{ backgroundColor: cartItem.item.color }}
      >
        <img
          className="cartItem--image"
          src={cartItem.item.image}
          alt={cartItem.item.name}
        />
      </div>

      <div className="wrapper--cartItem__info">
        <h3 className="cartItem--name">{cartItem.item.name}</h3>
        <h2 className="cartItem--price">$ {cartItem.item.price}</h2>
        <div className="cartItem--button">
          <button
            data-id={cartItem.item.id}
            className="desc"
            onClick={onQuantityButton}
          >
            -
          </button>
          <span className="cartItem--quantity">{cartItem.quantity}</span>
          <button
            data-id={cartItem.item.id}
            className="inc"
            onClick={onQuantityButton}
          >
            +
          </button>
          <button className="del" onClick={onQuantityButton}>
            <img
              data-id={cartItem.item.id}
              className="trash"
              src="image/trash.png"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
