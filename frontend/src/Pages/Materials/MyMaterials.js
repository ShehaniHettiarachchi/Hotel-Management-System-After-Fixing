import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link} from "react-router-dom";
import {useReactToPrint} from "react-to-print"

const MyMaterials = () => {

  const [material, setMaterial] = useState([]);

  const email=localStorage.getItem("email")
  useEffect(() => {
    axios
      .get(`http://localhost:8070/material/`)
      .then(  
        (res) => setMaterial(res.data))
      .catch((error) => console.log(error));


  });

  const DeleteMaterial = (id) => {
    axios
      .delete(`http://localhost:8070/material/delete/${id}`)

      .then((res) => alert("Material Deleted"));

    setMaterial(material.filter((elem) => elem.id !== id));
  };

  const componentRef= useRef();

  const handlePrint=useReactToPrint({

content:() =>componentRef.current,

  });

  return (
    <div>
      <br></br>
      <div className="row">
        <h1 className="text-center">My Materials</h1>
      </div>
      <br></br>
      <div className="row">
        <div className="col-md-1"></div>

        

     <Link className="btn btn-success btn-sm btn-block text-center"
     to="/addmaterial"
     >
      Add Materials
     </Link>

        
      <center>
        <div className="col-md-10">
          <table className="table text-center">
            <thead className="thead-light">
              <th>Material Name</th>
              <th>Quantity</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Company</th>
              <th>Unit Price</th>
              <th>Update</th>
              <th>Delete</th>
            </thead>

            {material.filter((elem) => elem.supEmail == email).map((setMaterial, key) => (
              <tbody>
                <tr>
                  <td>{setMaterial.materialName}</td>
                  <td>{setMaterial.quantity}</td>
                  <td>{setMaterial.supEmail}</td>
                  <td>{setMaterial.supContact}</td>
                  <td>{setMaterial.supCompany}</td>
                  <td>{setMaterial.unitPrice}</td>
                  <td>
                    <Link
                      to={`/${setMaterial._id}`}
                      className="btn btn-warning">
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => DeleteMaterial(setMaterial._id)}
                      className="btn btn-danger">
                      Delete
                    </button>
                    
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
          
        </div>
        </center>

        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default MyMaterials;
