import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupPage from "./pages/Sign_up";
import History from "./pages/History";
import LoginPage from "./pages/Login";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <BrowserRouter>
        <Routes>
          <Route index element={<SignupPage />}></Route>
          <Route path="/History" element={<History />}></Route>
          <Route path="/Login" element={<LoginPage />}></Route>
        </Routes>
      </BrowserRouter>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
