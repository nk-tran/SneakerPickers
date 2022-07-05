import React from "react";
import "./AddAListing.scss";
import addSneakers from "../images/sneakers2.jpeg"
import { useState } from "react";
import { useNavigate } from "react-router-dom"
import axios from "axios";
import {ToastContainer, toast, Zoom, Bounce} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { Toast } from "react-bootstrap";

function AddAListing() {

  // const [state, setState] = useState({
  //   name,
  //   size :4
  //   brand :"Air Jordan"
  //   description,
  //   img,
  //   preference
  // })

  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [size, setSize] = useState("")
  const [brand, setBrand] = useState("")
  const [description, setDescription] = useState("")
  const [img, setImg] = useState("")
  const [preference, setPreference] = useState("")

  // toast.success("Offer placed successfully!")

  //send data to api
  const uploadListing = function (e) {
    e.preventDefault();
    axios.post("api/listings",{name, size, brand, description, img, preference})
    .then(() => {
      successToast();
    })
    .then(() => {
      setTimeout( () => navigate('/browse'), 1500)
    })
    .catch((err)=>{
      console.log("Error occured in ",err)
    })
  }

  const handleChange = (e) => {
    console.log("handleChange e  => ", e.target.value, typeof e.target.value)
    console.log("name=",e.target.name)
    const val = Number(e.target.value);
    setSize(val)
  }



  const successToast = () => {
    toast("Listing added successfully!", {
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.TOP_CENTER
    });
  };

  


  return (
    <div className="add-body">
      <div className="master-container">
        <ToastContainer 
        autoClose={1500}
        />
        <div>
          <img className="add-a-listing-img" name src={addSneakers} />
        </div>
        <form className="form">
          <h3 className="form-heading">Upload your shoes to trade</h3>
          <div className="int-area">
            <input
              type="text"
              name="shoes-name"
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
              autoComplete="off"
              required
            />
            <label>Name</label>
          </div>
          <div className="size-brand">
            <div>
              <select name="size" className="size" onChange={handleChange}>
                <option value="4">Size 4</option>
                <option value="5">Size 5</option>
                <option value="6">Size 6</option>
                <option value="7">Size 7</option>
                <option value="8">Size 8</option>
                <option value="9">Size 9</option>
                <option value="10">Size 10</option>
                <option value="11">Size 11</option>
                <option value="12">Size 12</option>
              </select>
            </div>
            <div>
              <select name="brand" className="brand" onChange={(e)=>{setBrand(e.target.value)}}>
                <option value="Air Jordan">Air Jordan</option>
                <option value="Nike Dunks">Nike Dunks</option>
                <option value="Nike Air Force">Nike Air Force 1</option>
                <option value="Adidas Yeezy">Adidas Yeezy</option>
                <option value="New Balances">New balances</option>
                <option value="Vans/Converse">Vans/Converse</option>
                <option value="Others">Others</option>
              </select>
            </div>
          </div>
          <div className="int-area">
            <input
              type="text"
              name="description"
              value={description}
              onChange={(e)=>{setDescription(e.target.value)}}
              autoComplete="off"
              required
            />
            <label>Description</label>
          </div>
          <div className="int-area">
            <input
              type="text"
              name="img-url"
              value={img}
              onChange={(e)=>{setImg(e.target.value)}}
              autoComplete="off"
              required
            />
            <label>Image Url</label>
          </div>
          <div className="int-area">
            <input
              type="text"
              name="pref"
              value={preference}
              onChange={(e)=>{setPreference(e.target.value)}}
              autoComplete="off"
              required
            />
            <label>Preference(eg.Nike Dunks Varisty red etc.)</label>
          </div>
          <div className="btn-area">
            <button type="submit" onClick={(e)=>{uploadListing(e)}}>Publish</button>
          </div>
        </form>
        </div>
    </div>
  );
}

export default AddAListing;
