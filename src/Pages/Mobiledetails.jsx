import React, { useEffect, useState } from "react";
import Fluidimage from "../Component/ImageM/ImageM";
import ProductCard from "../Component/ProductCard";
import Image from "react-bootstrap/Image";
import { useDispatch, useSelector } from "react-redux";
import { addNewProducts } from "../Redux/Cartslice";

export default function Mobiledetails() {
  let dispatch = useDispatch();

  let { items = [] } = useSelector((state) => state.products);



  // FETCHING PRODUCTS.JSON DATA FROM MOCKS USING FETCH AND useEffect HOOK
  //THE DATA IS CONFIGURED IN ANOTHER NODEJS PROJECT AND DEPLOYED IN RENDER WEBSITE

  useEffect(() => {
    fetch("https://user-data-9q7h.onrender.com/data")
      .then((reponse) => reponse.json())
      .then((result) => {
        // console.log(result);
        if (result) {
          result.map((d, i) => {
            dispatch(addNewProducts({ ...d, quantity: 1 }));
          });
        }
      })
      .catch((error) => console.log(error));

    return () => {};
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Fluidimage ImageB="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7KAWTA4HiHIdxcTOtP_tUlUyYbmqcIbiL7r40GgBYVwezjajj9ebLbSlSbkKTUt5WlY&usqp=CAU" />

            {items.map((d, i) => (
              <ProductCard key={`prod-item-${i}`} data={d} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
