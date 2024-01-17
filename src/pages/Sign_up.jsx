import { useEffect, useState } from "react";
import $ from "jquery";
import Alert from "../components/Alert";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");
  const [usernameExists, setUsernameExists] = useState(false);
  const [submitButtonClicked, setSubmitButtonClicked] = useState(false); // State to track button click

  useEffect(() => {
    document.title = "Create an Account";
    document.body.style.backgroundImage =
      'url("https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg")';
  }, []);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setUsernameExists(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitButtonClicked(true);

    const form = $(e.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        if (data === "ConnectedUsername already exists") {
          setUsernameExists(true);
        } else {
          setResult(data);
        }
        console.log(result);
      },
    });
  };

  return (
    <div className="flex justify-center m-8">
      <div className="flex flex-col h-[100vh] justify-center">
        <form
          className="relative flex flex-col w-fit bg-opacity-20 rounded-lg shadow-lg backdrop-blur-md border border-opacity-30g py-8 px-8 animate-fade"
          method="post"
          action="http://localhost:3000/PHP/Signup.php"
          onSubmit={(event) => handleSubmit(event)}
        >
          {submitButtonClicked && !usernameExists && result && (
            <Alert
              AlertText="Account Successfully Created. Please Log-in"
              className=" text-green-600 text-xs mb-2"
            />
          )}

          {submitButtonClicked && usernameExists && (
            <Alert
              AlertText="Username already exists."
              className="text-red-600 text-xs mb-2"
            />
          )}

          <h2 className="text-2xl mb-8">Sign-up</h2>

          <label className="" htmlFor="username">
            Enter your name :
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full min-w-xs mt-1 mb-6"
            name="username"
            value={username}
            onChange={(event) => handleUsernameChange(event)}
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
            onChange={(event) => handlePasswordChange(event)}
            required
          />

          <a className="text-xs mb-6" href="/Login">
            Have an account ? <br /> Login !
          </a>

          <button
            className="border-solid border-blue-300 p-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
            type="submit"
          >
            Sign-up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
