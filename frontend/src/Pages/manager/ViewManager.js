import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {useReactToPrint} from "react-to-print"

const ViewManager = () => {

  const [searchTerm,setSearchTerm]=useState("");

  const [allManager, setAllManager] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/manager/")
      .then((res) => setAllManager(res.data))
      .catch((error) => console.log(error));
  });

  const deleteManager = (id) => {
    axios
      .delete(`http://localhost:8070/manager/delete/${id}`)
      .then((res) => alert("Manager Deleted"));

    setAllManager(allManager.filter((elem) => elem.id !== id));
  };

  const componentRef= useRef();
  const handlePrint=useReactToPrint({

content:() =>componentRef.current,

  });

  return (
    <div>
      <br></br>
      <div className="row">
        <h1 className="text-center">All Managers</h1>
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
              <th>Student Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Edit</th>
              <th>Delete</th>
            </thead>

            {allManager.filter((val)=>{
                 if(searchTerm==""){

                  return val

                 }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){

                  return val

                 }


            }).map((setManagers, key) => (
              <tbody>
                <tr>
                  <td>{setManagers.name}</td>
                  <td>{setManagers.email}</td>
                  <td>{setManagers.gender}</td>
                  <td>
                    <Link
                      to={`/updatem/${setManagers._id}`}
                      className="btn btn-warning">
                      Update
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => deleteManager(setManagers._id)}
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

export default ViewManager;
