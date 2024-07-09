import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navbar } from "../components/Navbar";

const Product = () => {
  const { id } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    const fetching = async () => {
      const response = await fetch(`http://localhost:3000/product/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetching();
  }, [id]);

  if (!product) {
    return (
      <>
        <Navbar></Navbar>
        <div className="p-8 py-16 h-[80vh] max-w-screen-xl m-auto shadow-xl rounded">
          <div className="flex place-items-center">
            <div className="min-w-[500px] h-[500px] animate-pulse bg-slate-100"></div>

            <div className="flex flex-col w-full m-8 ">
              <h1 className="m-2 p-2 text-4xl h-20  animate-pulse bg-slate-100"></h1>
              <p className="m-2 p-2 h-44  animate-pulse bg-slate-100"></p>
              <p className="m-2 p-2 h-20 animate-pulse bg-slate-100"></p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="p-8 py-16 max-w-screen-xl m-auto shadow-xl rounded">
        <div className="flex place-items-center">
          <img className="w-full h-full max-w-2xl" src={product.image} />
          <div>
            <h1 className="m-2 p-2 text-4xl">{product.name}</h1>
            <p className="m-2 p-2">{product.description}</p>
            <p className="m-2 p-2">Rs. {product.price}</p>

            <button className="text-sm">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
