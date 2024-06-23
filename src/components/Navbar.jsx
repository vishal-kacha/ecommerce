import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"signin"}>Signin</Link>
        <Link to={"signup"}>Signup</Link>
      </div>
    </>
  );
};
