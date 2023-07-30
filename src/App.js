import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Mobilestore from "./Pages/Mobilestore";
import Mobiledetails from "./Pages/Mobiledetails";
import Header from "./Component/Header/Header";

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
        <Route path="/Mobiledetails" Component={Mobiledetails}>
          Book Details
        </Route>
      </Routes>
    </div>
  );
}
