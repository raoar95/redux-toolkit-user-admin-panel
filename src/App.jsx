import React from "react";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  return (
    <>
      <Navbar />
      <UserDetails />
    </>
  );
};

export default App;
