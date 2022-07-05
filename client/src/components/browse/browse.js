import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import './browse.scss'
import axios from "axios";
import ListingItem from "./ListingItem"

function Browse() {

  const [listings, setListings] = useState([])
  const [brands, setBrands] = useState("")
  const [sizes, setSizes] = useState("")

  //loads listing on page-load
  useEffect(() => {
    loadListing()
  }, []);

  //loads all available listing
  function loadListing() {
    return (axios.get('/api/alllistings')
      .then((result) => {
        setListings(result.data)
      })
    )
  }

  //assigns result variable to pass to ListingItem
  const cardListing = listings.map((listing) => {
    return (
      <ListingItem
        key={listing.id}
        name={listing.name}
        size={listing.size}
        brand={listing.brand}
        picture={listing.image_url}
        preference={listing.preference}
        description={listing.description}
        id={listing.id}
      />
    );
  });


  //fetches filtered api with onclick from filter button
  function loadFilter() {
    return (axios.post('/api/listingsfilter', { size: sizes, brand: brands })
      .then((result) => {
        setListings(result.data)
      })
    )
  }

  //runs each time listings gets updated


  return (

    <div className="browse-body">
      <div className="filter-bar">
        
        <select name="brand" id="brand-browse" onChange={(e) => { setBrands(e.target.value) }}>
          <optgroup label="Brand">
            <option value="Air Jordan">Air Jordan</option>
            <option value="Nike Dunks">Nike Dunks</option>
            <option value="Nike Air Force">Nike Air Force</option>
            <option value="Adidas Yeezy">Adidas Yeezy</option>
            <option value="New Balances">New Balances</option>
            <option value="Vans/Converse">Vans/Converse</option>
            <option value="Others">Others</option>
          </optgroup>
        </select>
        
        
        <select name="size" id="size-browse" onChange={(e) => { setSizes(e.target.value) }}>
          <optgroup label="Size">
            <option value="4">Size 4</option>
            <option value="5">Size 5</option>
            <option value="6">Size 6</option>
            <option value="7">Size 7</option>
            <option value="8">Size 8</option>
            <option value="9">Size 9</option>
            <option value="10">Size 10</option>
            <option value="11">Size 11</option>
            <option value="12">Size 12</option>
          </optgroup>
        </select>
        
        <button type="submit" id="search" onClick={() => loadFilter()} >Search</button>
        <button type="button" id="reset" onClick={() => loadListing()} >Reset</button>
      </div>
        {cardListing}
    </div>
  );
}

export default Browse;