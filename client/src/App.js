import SaleBox from "./components/SaleBox";
import CartBox from "./components/CartBox";
import { useEffect, useState } from "react";

const cart = [
  {
    item: {
      id: "products_1698314920106_f69975ee-7005-4ca7-83f9-d0d101c77a57",
      name: "Nike Air Zoom Pegasus 36 Shield",
      description:
        "The Nike Air Zoom Pegasus 36 Shield gets updated to conquer wet routes. A water-repellent upper combines with an outsole that helps create grip on wet surfaces, letting you run in confidence despite the weather.",
      image:
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1315882/air-zoom-pegasus-36-shield-mens-running-shoe-24FBGb__1_-removebg-preview.png",
      price: "89.97",
      color: "#4D317F",
    },
    quantity: 1,
  },
];

function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    try {
      async function fetchProducts() {
        const res = await fetch("http://localhost:8080/api/v1/products");
        const data = await res.json();
        setProducts(data);
      }

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }, [SaleBox, CartBox]);

  function handleAddToCart(e, productId) {
    console.log(productId);
    const prodId = productId ? productId : e.target.getAttribute("data-id");

    // check prod is exist on the cart
    const index = cartItems.findIndex(
      (cartItem) => cartItem.item.id.toString() === prodId.toString()
    );
    if (index !== -1) {
      const oldItems = [...cartItems];
      const oldItem = { ...oldItems[index] };
      oldItem.quantity++;
      oldItems[index] = oldItem;

      setCartItems(oldItems);
    } else {
      const prod = products.find(
        (product) => product.id.toString() === prodId.toString()
      );
      const cartItem = {
        item: prod,
        quantity: 1,
      };
      setCartItems((cartItems) => [...cartItems, cartItem]);
    }
  }

  function handleTrash(prodId) {
    const index = cartItems.findIndex(
      (cartItem) => cartItem.item.id.toString() === prodId.toString()
    );

    const newCart = [...cartItems];
    newCart.splice(index, 1);

    setCartItems(newCart);
  }

  function handleDescItem(prodId) {
    const index = cartItems.findIndex(
      (cartItem) => cartItem.item.id.toString() === prodId.toString()
    );

    const oldItems = [...cartItems];
    const oldItem = { ...oldItems[index] };
    oldItem.quantity--;
    oldItems[index] = oldItem;

    console.log(oldItem.quantity);

    if (oldItem.quantity <= 0) {
      oldItems.splice(index, 1);
    }
    setCartItems(oldItems);
  }

  function handleQuantityClick(e) {
    const btnName = e.target.className;
    const prodId = e.target.getAttribute("data-id");
    console.log(btnName);
    switch (btnName) {
      case "inc":
        {
          handleAddToCart(e, prodId);
        }
        break;

      case "desc":
        {
          handleDescItem(prodId);
        }
        break;

      case "trash":
        {
          handleTrash(prodId);
        }
        break;
      default:
        break;
    }
  }

  return (
    <div className="App">
      <div className="circle"></div>
      <SaleBox products={products} onAddToCart={handleAddToCart} />
      <CartBox cartItems={cartItems} onQuantityButton={handleQuantityClick} />
    </div>
  );
}

export default App;
