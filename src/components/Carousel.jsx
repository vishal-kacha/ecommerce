import { Link } from "react-router-dom";

const Carousel = ({ params }) => {
  if (!params) {
    return (
      <>
        <div className="flex flex-nowrap bg-sky-50  h-[500px] mb-4 rounded-md  p-4 m-4">
          <div className="m-2 p-2 w-full">
            <p className="my-4 p-4 w-full h-12 animate-pulse bg-slate-200"></p>
            <p className="my-4 p-4 w-full h-48 animate-pulse bg-slate-200"></p>
            <p className="my-4 p-4 w-full h-14 animate-pulse bg-slate-200"></p>
          </div>
          <div className="w-full h-full animate-pulse bg-sky-100"></div>
        </div>
      </>
    );
  }

  return (
    <>
      <Link to={`/product/${params._id}`}>
        <div className="bg-sky-50 h-[500px] mb-4 rounded-md relative">
          <div className="flex justify-center items-center h-full">
            <div className="w-[50%] p-4 m-4">
              <h1 className="my-4">{params.name}</h1>
              <p className="text-[1.3rem] my-4">{params.description}</p>
            </div>
            <div className="w-[50%]">
              <img
                className="m-2 w-[70%] h-[70%] object-cover"
                src={params.image}
              />
            </div>
          </div>
        </div>
      </Link>

      {/* <div className="flex justify-center items-center h-full"> */}
      {/*   <div className="w-[50%] p-4 m-4"> */}
      {/*     <h1 className="my-4">{params.name}</h1> */}
      {/*     <p className="text-[1.3rem] my-4">{params.description}</p> */}
      {/**/}
      {/*     <button className="text-sm m-0 my-4">Add to cart</button> */}
      {/*   </div> */}
      {/*   <div className="w-[50%]"> */}
      {/*     <img */}
      {/*       className="m-2 w-[70%] h-[70%] object-cover" */}
      {/*       src={params.image} */}
      {/*     /> */}
      {/*   </div> */}
      {/* </div> */}

      {/* <div className="absolute bottom-0 left-3/4 flex gap-2 mb-8"> */}
      {/*   <div className="w-2 h-2 bg-slate-800 rounded-full cursor-pointer"></div> */}
      {/*   <div className="w-2 h-2 bg-slate-800 rounded-full cursor-pointer"></div> */}
      {/* </div> */}
    </>
  );
};

export default Carousel;
