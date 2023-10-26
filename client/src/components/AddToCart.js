export default function AddToCart({ onAddToCart, id }) {
  return (
    <div className="product--addToCart" onClick={onAddToCart} data-id={id}>
      ADD TO CART
    </div>
  );
}
