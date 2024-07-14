import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";

const Cart = () => {
  const [cartItem, setCartItem] = useState();

  useEffect(() => {
    const fetching = async () => {
      const token = localStorage.getItem("token");

      const res = await fetch("http://localhost:3000/api/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      setCartItem(data.carts);
    };

    fetching();
  }, []);

  if (!cartItem) {
    return (
      <>
        <Navbar />
        <h1>no item found</h1>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-evenly items-center p-4 max-w-screen-xl m-auto">
        {cartItem.map((item) => (
          <div
            className="flex justify-center items-center shadow-md"
            key={item._id}
          >
            <img src={item.image} />
            <div>
              <h1 className="m-4">{item.name}</h1>
              <p className="m-4">Rs. {item.price}</p>
              <button>Buy now</button>
              <button className="bg-rose-600 hover:bg-rose-800">remove</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cart;
