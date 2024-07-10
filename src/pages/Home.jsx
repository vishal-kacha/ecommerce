import { useEffect, useState } from "react";
import Carousel from "../components/Carousel";
import { Navbar } from "../components/Navbar";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchIngData = async () => {
      const response = await fetch("http://localhost:3000/products");
      const dataRes = await response.json();

      setData(dataRes);
    };

    fetchIngData();
  }, []);

  return (
    <>
      <Navbar />

      <div className=" p-4 max-w-screen-xl m-auto gap-4">
        <Carousel params={data[1]} />
        <div className="flex flex-wrap justify-evenly items-center my-6">
          <ProductCard params={data[0]} />
          <ProductCard params={data[2]} />
          <ProductCard params={data[3]} />
        </div>
      </div>
    </>
  );
};

export default Home;
