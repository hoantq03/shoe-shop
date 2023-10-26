import Logo from "./Logo";
import Title from "./Title";
import Product from "./Product";

export default function SaleBox({ products = [], onAddToCart }) {
  return (
    <div className="sale-box">
      <div className="circle--box"></div>
      <div className="header-box">
        <Logo />
        <Title title={"Our Products"} />
      </div>
      <div className="list--products">
        {products.map((product) => {
          return (
            <Product
              product={product}
              onAddToCart={onAddToCart}
              key={product.id}
            />
          );
        })}
      </div>
    </div>
  );
}
