import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {useReactToPrint} from "react-to-print"

const ViewCustomer = () => {

  const [searchTerm,setSearchTerm]=useState("");

  const [allCustomer, setAllCustomer] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/customer/")
      .then((res) => setAllCustomer(res.data))
      .catch((error) => console.log(error));
  });

  const deleteManager = (id) => {
    axios
      .delete(`http://localhost:8070/customer/delete/${id}`)
      .then((res) => alert("Customer Deleted"));

    setAllCustomer(allCustomer.filter((elem) => elem.id !== id));
  };

  const componentRef= useRef();
  const handlePrint=useReactToPrint({

content:() =>componentRef.current,

  });

  return (
    <div>
      <br></br>
      <div className="row">
        <h1 className="text-center">All Customers</h1>
      </div>
      <br></br>
      <div className="row">
        <div className="col-md-1"></div>

        

        <div className="col-md-10">

        <input 
        type="text"
        placeholder="Enter Name"
        onChange={(event)=>{
          setSearchTerm(event.target.value)

        }}
        
        />

          <table className="table text-center">
            <thead className="thead-light">
              <th>Customer Image</th>
              <th>Customer Name</th>
              <th>Customer Email</th>
              <th>Customer Phone</th>
              <th>Address</th>
              <th>NIC</th>
              <th>DOB</th>
            </thead>

            {allCustomer.filter((val)=>{
                 if(searchTerm==""){

                  return val

                 }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){

                  return val

                 }


            }).map((setCustomers, key) => (
              <tbody>
                <tr>
                  <td>{setCustomers.name}</td>
                  <td>{setCustomers.email}</td>
                  <td>{setCustomers.phone_number}</td>
                  <td>{setCustomers.address}</td>
                  <td>{setCustomers.NIC}</td>
                  <td>{setCustomers.gender}</td>
                  
                  <td>
                    <button
                      onClick={() => deleteManager(setCustomers._id)}
                      className="btn btn-danger">
                      Delete
                    </button>
                    
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          <button
                      onClick={handlePrint}
                      className="btn btn-danger">
                      print
                    </button>
        </div>

        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default ViewCustomer;
