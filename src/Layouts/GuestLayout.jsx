import { NavLink, Outlet } from "react-router-dom";
import Footer from "../components/Footer";

export default function GuestLayout() {
  return (
    <div className="flex flex-col justify-center">
      <header className="flex w-[100%] bg-base-100 justify-center">
        <div className=" text-2xl py-3 font-sans">
          <NavLink to="/Homepage">EcoCycle</NavLink>
        </div>
      </header>
      <div className="flex flex-col justify-center px-6 rounded-md lg:px-8 border w-max self-center border-gray-950">
        <div className="sm:mx-auto justify-center self-center text-center">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}
