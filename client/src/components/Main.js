import React from "react";
import { Routes, Route } from "react-router-dom";


import Profile from "./MyAccount/Profile";
import Offers from "./MyAccount/Offers";
import MyListings from "./MyAccount/MyListings";
import AddAListing from "./MyAccount/AddAListing";
import Landingpage from "./landingpage/Landingpage";
import Browse from "./browse/browse";
import Login from "./loginpage/Login";
import Register from "./registerpage/Register";
import Logout from "./logout/Logout";
import Placeoffer from "./browse/Placeoffer";
import Accepted from "./history/acceptedOffers"

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/offers" element={<Offers />}></Route>
      <Route path="/mylistings" element={<MyListings />}></Route>
      <Route path="/addalisting" element={<AddAListing />}></Route>
      <Route path="/browse" element={<Browse />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/logout" element={<Logout />}></Route>
      <Route path="/placeoffer/:id" element={<Placeoffer />}></Route>
      <Route path="/history" element={<Accepted />}></Route>
    </Routes>
  );
};

export default Main;
