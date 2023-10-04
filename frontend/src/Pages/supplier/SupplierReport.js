import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import { Link, useParams } from "react-router-dom";
import { useReactToPrint } from "react-to-print";
import { Doughnut } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

const SupplierReport = () => {
  const [allSupplier, setAllSupplier] = useState([]);

  useEffect(() => {
    axios
      .get("http://Localhost:8070/suppliers/")
      .then((res) => setAllSupplier(res.data))
      .catch((error) => console.log(error));
  });

  const deleteSupplier = (id) => {
    axios
      .delete(`http://localhost:8070/suppliers/delete/${id}`)
      .then((res) => alert("Supplier Deleted"));

    setAllSupplier(allSupplier.filter((elem) => elem.id !== id));
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  //Count how many suppliers are in each category
  const bedsheetSups = allSupplier
    .filter((elem) => elem.materialType === "Bed Sheets")
    .reduce((acc, elem) => acc + 1, 0);
  const glassSups = allSupplier
    .filter((elem) => elem.materialType === "Glass")
    .reduce((acc, elem) => acc + 1, 0);
  const foodsSups = allSupplier
    .filter((elem) => elem.materialType === "Foods")
    .reduce((acc, elem) => acc + 1, 0);
  const decorSups = allSupplier
    .filter((elem) => elem.materialType === "Decorations")
    .reduce((acc, elem) => acc + 1, 0);
  const doughnutData = {
    labels: ["Bed Sheets", "Glass", "Foods", "Decorations"],
    datasets: [
      {
        data: [bedsheetSups, glassSups, foodsSups, decorSups],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  };

  return (
    <div>
      <div ref={componentRef}>
        <br></br>
        <div className="row">
          <h1 className="text-center">Supplier Report</h1>
        </div>

        <div className="row mb-5">
          <div className="col-md-4 ml-4"></div>
          <div className="col-md-3 ml-5">
            <Doughnut data={doughnutData} />
          </div>
        </div>

        <br></br>
        <div className="row">
          <div className="col-md-1"></div>

          <div className="col-md-10">
            <table className="table text-center">
              <thead className="thead-light">
                <th>Name</th>
                <th>Email</th>
                <th>Contact Number</th>
                <th>Company Name</th>
                <th>Company Address</th>
                <th>Material Type</th>
              </thead>

              {allSupplier.map((supplier, key) => (
                <tbody>
                  <tr>
                    <td>{supplier.name}</td>
                    <td>{supplier.email}</td>
                    <td>{supplier.phone}</td>
                    <td>{supplier.comName}</td>
                    <td>{supplier.comAddress}</td>
                    <td>{supplier.materialType}</td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-10 ml-5">
          <button className="btn btn-danger mb-2" onClick={handlePrint}>
            Print
          </button>
        </div>
      </div>
    </div>
  );
};

export default SupplierReport;
