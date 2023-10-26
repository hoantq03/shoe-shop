import AddToCart from "./AddToCart";

export default function Product({ product = null, onAddToCart }) {
  return (
    <div className="product">
      <div
        className="wrapper--image"
        style={{ backgroundColor: product.color }}
      >
        <img
          className="product--image"
          src={product.image}
          alt={product.name}
        />
      </div>
      <h3 className="product--name">{product.name}</h3>
      <p className="product--description">{product.description}</p>
      <div className="product--footer">
        <h3 className="product--price">$ {product.price}</h3>
        <AddToCart onAddToCart={onAddToCart} id={product.id} />
      </div>
    </div>
  );
}
