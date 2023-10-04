import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {useReactToPrint} from "react-to-print"

const ViewAllSupplier = () => {

  const [searchTerm,setSearchTerm]=useState("");

  const [allSupplier, setAllSupplier] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/suppliers/")
      .then((res) => setAllSupplier(res.data))
      .catch((error) => console.log(error));
  });

  const deleteSupplier = (id) => {
    axios
      .delete(`http://localhost:8070/suppliers/delete/${id}`)
      .then((res) => alert("supplier Deleted"));

    setAllSupplier(allSupplier.filter((elem) => elem.id !== id));
  };

  const componentRef= useRef();
  const handlePrint=useReactToPrint({

content:() =>componentRef.current,

  });

  return (
    <div>
      <br></br>
      <div className="row">
        <h1 className="text-center">All Suppliers</h1>
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
              
              <th>Supplier Name</th>
              <th>Supplier Email</th>
              <th>Supplier Phone</th>
              <th>Company Name</th>
              <th>Material Type</th>
              <th>Company Address</th>
             
            </thead>

            {allSupplier.filter((val)=>{
                 if(searchTerm==""){

                  return val

                 }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){

                  return val

                 }


            }).map((setSuppliers, key) => (
              <tbody>
                <tr>
                  <td>{setSuppliers.name}</td>
                  <td>{setSuppliers.email}</td>
                  <td>{setSuppliers.phone}</td>
                  <td>{setSuppliers.comName}</td>
                  <td>{setSuppliers.materialType}</td>
                  <td>{setSuppliers.comAddress}</td>
                  
                  <td>
                    <button
                      onClick={() => deleteSupplier(setSuppliers._id)}
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

export default ViewAllSupplier;
