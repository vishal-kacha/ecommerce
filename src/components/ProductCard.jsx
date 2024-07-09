import { Link } from "react-router-dom";

const ProductCard = ({ params }) => {
  if (!params) {
    return <></>;
  }

  return (
    <>
      <div className="max-w-80 rounded m-2 flex flex-col justify-center shadow-md p-4">
        <Link to={`/product/${params._id}`}>
          <img className="m-2 max-w-[250] max-h-[225]" src={params.image} />
          <h2 className="mt-6 mx-4">{params.name}</h2>
          <div className="flex justify-between items-center">
            <p className="mx-4">price: {params.price}</p>
          </div>
        </Link>
        <button className="text-sm">Add to cart</button>
      </div>
    </>
  );
};

export default ProductCard;
