import React, { useState, useEffect } from "react";

import axios, { Axios } from "axios";
import { renderMatches } from "react-router-dom";
import { Link } from "react-router-dom";
import {Input}from "antd";

const{ Search }=Input;

export default function AllPackage() {
  const [Package, setPackage] = useState([]);
  const [SearchTerms,setSearchTerms] = useState([]);
  

  useEffect(() => {
    function getPackage() {
      axios
        .get("http://Localhost:8070/Package/")
        .then((res) => {
          console.log(res.data);
          setPackage(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });

        
    }
    getPackage()
      axios.get("http://Localhost:8070/Package/")
          .then(res => {
              this.setState({ search_result: res.data });
          })
          .catch(function (error) {
              console.log(error);
          })
  

    getPackage();
  }, []);

  const deletePackage = (id) => {
    axios
      .delete(`http://Localhost:8070/package/delete/${id}`)
      .then((res) => alert("Package Deleted"));

    setPackage(Package.filter((elem) => elem.id !== id));
  };
  
  function SearchFeature(){

    

    const onChageSearch = (event) => {
      setSearchTerms(event.currentTarget.value)}
};
  

  return (

    
    <div>
      <div className="row">
        <h1 className="text-center">All Package</h1>
      </div>

    
      

<center>
      <Link
                      to={`/addpac`}
                      className="btn btn-warning">
                      Add New package
                    </Link>
                    </center>

                    


      <br></br>
      <div className="row">
        
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <table className="table text-center">
            <thead className="thead-light">
              <tr>
                <th>Package Name</th>
                <th>Package type</th>
                <th>Package Number</th>
                <th>TimePeriod</th>
                <th>Booking Price</th>
                <th>Persons</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            {Package.map((setPackage, key) => (
              <tbody>
                <tr>
                  <td>{setPackage.name}</td>
                  <td>{setPackage.ptype}</td>
                  <td>{setPackage.Pnumber}</td>
                  <td>{setPackage.TimePeriod}</td>
                  <td>{setPackage.BookPrice}</td>
                  <td>{setPackage.Persons}</td>
                  <td>{setPackage.Description}</td>

                  <td>
                    <Link
                      to={`/updatepac/${setPackage._id}`}
                      className="btn btn-warning">
                      Update
                    </Link>
                  </td>

                  <td>
                    <button
                      onClick={() => deletePackage(setPackage._id)}
                      className="btn btn-danger">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <center>
      <Link
                      to={`/resdash`}
                      className="btn btn-warning">
                      Back to Dashboard
                    </Link>
                    </center>
        </div>
        <div className="col-md-1"></div>
      </div>
    </div>
  );
}
