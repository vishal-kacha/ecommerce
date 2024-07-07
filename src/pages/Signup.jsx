import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex h-[90vh] flex-col place-content-center place-items-center gap-8">
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const username = formData.get("username");
            const password = formData.get("password");

            const response = await fetch("http://localhost:3000/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
              const { token } = await response.json();
              localStorage.setItem("token", token);
              navigate("/");
            }
          }}
        >
          <h1 className="m-4 p-2">Signup</h1>
          <div>
            <label htmlFor="username">username</label>
            <input
              type="username"
              placeholder="Enter a username"
              name="username"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              name="password"
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
