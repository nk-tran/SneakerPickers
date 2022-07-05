import React, { useState, useEffect } from "react";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { MdDescription } from "react-icons/md";
import { GiBarefoot } from "react-icons/gi";
import { FiMail, FiUser } from "react-icons/fi";


//Component path: acceptedOffers > forOffer > byOffer
export default function ByItem(props) {
  return (
    <div className="myoffers-cards" id="right">
      <img className="myoffers-img" src={props.image_url} alt="" id="history_id_card"/>
      <div className="listing-text-history" >
          <h1>{props.name}</h1>
          <div className="myoffers-text"><MdDescription />{props.description}</div>
          <div className="myoffers-text"><GiBarefoot/>{props.brand}/Size {props.size}</div>
          <div className="myoffers-text"><FiMail /> {props.email}</div>
          <div className="myoffers-text"><FiUser />By: {props.user_name}</div>
        </div>
    </div>
  );
}
