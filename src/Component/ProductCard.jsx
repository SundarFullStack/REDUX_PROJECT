import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useEffect, useState } from "react";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { UseSelector, useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../Redux/Cartslice";

export default function ProductCard({ data = {} }) {
  let [button, SetButton] = useState("Place Order");
  let [buttonId, setbuttonId] = useState("placeOrder");
  let { items = [] } = useSelector((state) => state.products);
  let [qty, setQty] = useState(1);
  let dispatch = useDispatch();
  let [itemCopy, setItemCopy] = useState([]);
  let [itemPrice, changePrice] = useState(null);

  // console.log(items)

  // HANDLING BUTTON FUNCTIONALITY

  function handleButtonName(e) {
    e.preventDefault();

    if (buttonId == "placeOrder") {
      setbuttonId("cancelOrder");
      SetButton("Cancel Order");

      changePrice(data.price * qty);
    } else if (buttonId == "cancelOrder") {
      setbuttonId("placeOrder");
      SetButton("Place Order");
      changePrice(null);
      setQty(1);
    }
  }

  //HANDLING QUANTITY FUNCTIONALITY

  function editfunc(e, type) {
    e.preventDefault();

    // console.log(type,data.id)

    if (type === "decrement" && qty > 1) {
      qty -= 1;

      setQty(qty);
    } else if (type === "increment") {
      qty += 1;

      setQty(qty);
    }
  }

  // console.log(buttonId,button)

  useEffect(() => {
    let itemcopy1 = [...itemCopy];

    itemcopy1 = [...items];

    setItemCopy(itemcopy1);
  }, [data]);

  return (
    <div
      className="card p-2 mt-3"
      style={{
        backgroundColor: "lightgray",
        border: "none",
        boxShadow:
          " rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
      }}
    >
      <div className="container">
        <div className="col-12">
          <div className="row">
            <div className="col-3">
              <Image
                src={data.thumbnail}
                style={{ height: "206px", borderRadius: "10px" }}
                fluid
              />
            </div>
            <div className="col-9">
              <div className="row">
                <div className="row">
                  <p
                    className="text-start"
                    style={{ color: "grey", fontSize: "25px" }}
                  >
                    <b>{data.title}</b>
                  </p>
                  <p className="text-end" style={{ marginTop: "-30px" }}>
                    <b>$ {data.price}</b>
                  </p>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <p>
                    Description: <small>( {data.description} )</small>
                  </p>
                </div>
              </div>

              <div className="row">
                <p>
                  Discount: <b>{data.discountPercentage}</b>%
                </p>
                <p>
                  Rating: <b>{data.rating}</b>%
                </p>
              </div>
              <div className="row">
                <p>
                  Stock: <b>{data.stock}</b> N
                </p>
                <p>
                  Brand: <b>{data.brand}</b>
                </p>
              </div>
              <div className="row">
                <div className="col-6">
                  {" "}
                  <p>
                    Category: <b>{data.category}</b>
                  </p>
                </div>

                {/* QUANTITY ADJUST */}
                <div className="col-3 text-end"></div>
                <div className="row"></div>
              </div>
              <div className="row d-flex flex-row-reverse">
                <div className="col-3">
                  <p>
                    <b>Quantity Adjust:</b>
                  </p>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      editfunc(e, "decrement");
                    }}
                  >
                    -
                  </Button>
                  <p id="qty">{qty}</p>
                  <Button
                    variant="primary"
                    onClick={(e) => {
                      editfunc(e, "increment");
                    }}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* ORDER BUTTON */}

              <Button
                varient="success"
                style={{ marginTop: "-57px" }}
                id={buttonId}
                onClick={(e) => {
                  handleButtonName(e);
                }}
              >
                {button}
              </Button>
            </div>
            <hr />

            <div className="row">
              <div>
                <p className="text-start" style={{ marginLeft: "291px" }}>
                  <b>
                    Ordered Qty:{" "}
                    <span
                      style={{
                        backgroundColor: "yellow",
                        padding: "2px",
                        borderRadius: "5px",
                      }}
                    >
                      {" "}
                      {data.quantity}{" "}
                    </span>
                  </b>
                </p>
                <p className="text-center" style={{ marginLeft: "400px" }}>
                  <b>Total:</b>
                </p>
                <p className="text-end" style={{ marginTop: "-38px" }}>
                  <b
                    style={{
                      backgroundColor: "yellow",
                      padding: "2px",
                      borderRadius: "5px",
                    }}
                  >
                    ${itemPrice ? itemPrice : data.price}
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
