import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Cart from "./Pages/Cart";
import Mobilestore from "./Pages/Mobilestore";
import Mobiledetails from "./Pages/Mobiledetails";
import Header from "./Components/Header/Header";

export default function App() {
  return (
    <div>
      {/* HEADER */}
      <Header />
      {/* ROUTING FOR PAGES */}
      <Routes>
        <Route path="/" Component={Mobilestore}>
          Book Store
        </Route>
        <Route path="/Mobiledetails/:Bookname" Component={Mobiledetails}>
          Book Details
        </Route>
        <Route path="/Cart" Component={Cart}>
          Cart
        </Route>
      </Routes>
    </div>
  );
}
