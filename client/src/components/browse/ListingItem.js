import React from "react";
import "./ListingItem.scss";
import { BsFillBookmarkHeartFill} from "react-icons/bs";
import { MdDescription} from "react-icons/md";





export default function ListingItem(props) {

  const {name,size,brand,description,preference,id,picture} = props


  return (

    <section className="browse-container">
      <img className="mylisting-img" src={picture} />
      <div className="mylisting-card-contents">
        <div className="listing-text" id="browse-name">
          <h1>{name}</h1>
        </div>
        <div className="listing-text" id="browse-pref">
          <BsFillBookmarkHeartFill className=""/><span>Preference: {preference}</span>
        </div>
        <div className="listing-text" id="brand-size-br">
          <div className="my-brand">{brand}</div>
          <div className="my-size">Size {size}</div>
        </div>
        <div className="listing-text" id="browse-desc">
          <MdDescription/><span>{description}</span>
        </div>
        <div className="make-offers">
        <a className="make-offer-button-href" href={`/placeoffer/${id}`}> <button type="submit">Make a Offer</button></a>
        </div>
      </div>
    </section>
  );
}


