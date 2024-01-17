import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { NavLink } from "react-router-dom";

export default function Homepage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    document.title = "Homepage";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center -15%";
    document.body.style.backgroundImage =
      "url('https://i.ibb.co/1Kn5TNf/background-image-homepage.jpg)";
    setAnimate(true); // Trigger animation when the component mounts
  }, []);

  return (
    <div className="flex flex-col pt-24 h-[100vh]">
      <div
        className={`flex flex-col md:flex-row w-full md:mt-5 mb-14 ${
          animate ? "animate-fade" : "fadeOut 5s ease-in-out"
        }`}
      >
        <div className="flex w-full md:w-[80%] justify-center items-center mt-4 md:mt-[4vh] md:px-16 md:l-12">
          <div className="flex flex-col text-center md:ml-12 md:text-left mt-4 md:mt-8 animate-fade">
            <h1 className="text-green-500 mb-4">EcoCycle</h1>
            <p className="transition duration-300 ease-in-out">
              EcoCycle Solutions is a forward-thinking company dedicated to
              revolutionizing waste management and fostering sustainable
              consumption patterns. With a mission to create a greener, more
              environmentally conscious future, EcoCycle Solutions specializes
              in innovative recycling solutions and eco-friendly initiatives.
            </p>
            <p className="transition duration-300 ease-in-out">
              EcoCycle Solutions is a forward-thinking company dedicated to
              revolutionizing waste management and fostering sustainable
              consumption patterns. With a mission to create a greener, more
              environmentally conscious future, EcoCycle Solutions specializes
              in innovative recycling solutions and eco-friendly initiatives.
            </p>
            <div className=" flex flex-row justify-center md:justify-start">
              <NavLink className="btn mr-2 transition duration-300 ease-in-out w-36 mt-8 hover:bg-green-800 hover:text-white-500 self-center md:self-start">
                Learn More
              </NavLink>
              <NavLink
                to="/Login"
                className="btn ml-2 transition duration-300 ease-in-out w-36 mt-8 hover:bg-green-800 hover:text-white-500 self-center md:self-start"
              >
                Login
              </NavLink>
            </div>
          </div>
        </div>
        <div className="hidden md:block w-full md:w-full justify-center items-center h-max md">
          <div className="mt-[20vh] md:mt-14">
            <Spline
              scene="https://prod.spline.design/06eGIKeAmJX7JCNk/scene.splinecode"
              style={{
                width: "100%",
                maxWidth: "100vh", // Set the max width for desktop
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
