import React, { useState, useEffect,useRef } from "react";

import { useReactToPrint } from "react-to-print";
import axios, { Axios } from "axios";
import { renderMatches } from "react-router-dom";
import { Link } from "react-router-dom";

const FoodReport = () => {

  const [Items, setItems] = useState([]);
 
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });

  useEffect(() => {
    axios
      .get("http://Localhost:8070/foods/")
      .then((res) => setItems(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <br></br>
      <div className="row">
        <br />
        <h1 className="text-center">Food Items Dashboard</h1>
      </div>
      <br></br>
      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <table className="table text-center">
            <thead class="thead-light">
              <th>Food Name</th>
              <th>Food ID</th>
              <th>Food Description</th>
              <th>Food Price</th>
            </thead>

            {Items.map((setItems, key) => (
              <tbody>
                <tr>
                  <td>{setItems.name}</td>
                  <td>{setItems.foodid}</td>
                  <td>{setItems.description}</td>
                  <td>{setItems.price}</td>
                </tr>
              </tbody>
            ))}
          </table>
          <br />
          <button className="btn btn-success">
            <a
              href="/viewfood"
              style={{ textDecoration: "none", color: "white" }}>
              Food Items Dashboard
            </a>
          </button>{" "}
           
          <br />
        </div>

    <br></br>
    <div className="row">
<br/>

<div class="print__section">
<div class="container">
      <div class="row">
        <div class="col-md-12">

          <div className="bill-model p-30" ref={componentRef} >
          <div class="float__start">
              <br/>
      <h1 className="text-center">Food Items Menu</h1>

      

    </div>
    <br></br>
    <div className="row">
      <div className="col-md-1"></div>

      <div className="col-md-10">
        <table className="table text-center">
          <thead className="thead-light">
            <th>Food Name</th>
            <th>Food ID</th>
            <th>Food Description</th>
            <th>Food Price</th>
           
          </thead>

          {Items.map((setItems, key) => (
            <tbody>
              <tr>
                <td>{setItems.name}</td>
                <td>{setItems.foodid}</td>
                <td>{setItems.description}</td>
                <td>{setItems.price}</td>
                
              </tr>
            </tbody>
          ))}
        </table>
        </div>
</div>
</div>
</div>
        </div>
        <button className="btn btn-secondary" onClick={handlePrint} >  Print </button> 
        <br/>

<br/>

      </div>
    </div>
    </div>
    </div>
    </div>
  );
}
export default FoodReport;


