import { useEffect, useState } from "react";
import $ from "jquery";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Sign-in";
    document.body.style.backgroundImage =
      'url("https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg")';
  }, []);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        setResult(data);
        console.log(result);
      },
    });
  };

  return (
    <div className="flex justify-center m-8">
      <div className="flex flex-col h-[100vh] justify-center">
        <form
          className="relative flex flex-col w-fit bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md border border-opacity-30g py-8 px-8 animate-fade"
          method="POST"
          action="http://localhost:3000/PHP/Login.php"
          onSubmit={(event) => handleSubmit(event)}
        >
          <h2 className="text-2xl mb-8">Login</h2>

          <label className="" htmlFor="username">
            Enter your name :
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full min-w-xs mt-1 mb-6"
            name="username"
            value={username}
            onChange={(event) => handleUsername(event)}
            required
          />

          <label className="" htmlFor="password">
            Enter your password :
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full min-w-xs mt-1 mb-4"
            name="password"
            value={password}
            onChange={(event) => handlePassword(event)}
            required
          />

          <NavLink className="text-xs mb-6" to="/Signup">
            Don{`t`} have an account ? {<br />} Sign-up !
          </NavLink>

          <button
            className="border-solid border-blue-300 p-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
