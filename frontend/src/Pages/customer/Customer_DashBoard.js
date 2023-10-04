import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const CusDash = () => {

  
  const [customer,setCustomer]=useState([]);
  const [name, setName] = useState("");
  const[fileName,setFileName]=useState("");
  const [Address, setAddress] = useState("");


  useEffect(() => {

    const id=localStorage.getItem("uID");
    axios

      .get(`http://localhost:8070/customer/get/${id}`)
      .then((res) => [
        setName(res.data.customer.name),
        setAddress(res.data.customer.address),
        setFileName(res.data.customer.customerImage),
        setCustomer(res.data),

        

      ])
      .catch((error) => console.log(error));
  }, []);



  return (
    <div>
        <div class="row py-5 px-4"> 
        <div class="col-md-12 mx-auto">
        {/*!<-- Profile widget -->*/}
         <div class="bg-white shadow rounded overflow-hidden">
          <div class="px-4 pt-0 pb-4 cover" > 
          <div class="media align-items-end profile-head">
           <div class="profile mr-3">
           <img  src={`/uploads/customer/${fileName}`} alt="..." width="250px" height="250px" class="rounded mb-2 img-thumbnail"></img>

           <div class="row">
           <Link
                      to={`/cusprof/${setCustomer._id}`}
                      className="btn btn-outline-dark btn-sm btn-block">
                      Edit Profile
                    </Link>
            
            <Link
            to="/cusimg"
            className="btn btn-outline-dark btn-sm btn-block">Edit Profile Image</Link>
            </div>
           </div> 
           <div class="media-body mb-5 text-white">
               
                <h4 class="mt-0 mb-0">{name}</h4>
                 <p class="small mb-4"> 
                 <i class="fas fa-map-marker-alt mr-2"></i>{Address}</p>
                  </div>
                   </div>
                    </div> 
                    <div class="bg-light p-4 d- text-center">
                    <div className="row">
                       <h1 className="text-center">Customer DashBoard</h1>
                       </div>
                         <ul class="list-inline mb-0"> <li class="list-inline-item">
                              <h5 class="font-weight-bold mb-0 d-block"></h5>
                              <small class="text-muted"> 
                              <i class="fas fa-image mr-1">
                                  </i></small> </li> 
                                  <li class="list-inline-item">
                                       <h5 class="font-weight-bold mb-0 d-block"></h5>
                                       <small class="text-muted"> <i class="fas fa-user mr-1"></i></small> </li>
                                        <li class="list-inline-item"> <h5 class="font-weight-bold mb-0 d-block"></h5>
                                        <small class="text-muted"> <i class="fas fa-user mr-1"></i></small> </li>
                                         </ul> 
                                         </div> 
                                         <div class="px-4 py-3"> 
                                         
                                         {/*Customer function Links*/}
                                         <br></br>
      

      <div className="row">
        <div class="col-md-12">
          <br></br>
          <div class="container">
            <div class="card-deck">
              <div class="card shadow">
                <img
                  src="../images/Booking.jpg"
                  class="card-img-top"
                  width="100px"
                  height="400px"></img>
                <div class="card-body">
                  <br></br>
                  <Link
                      to="/disres"
                      className="btn btn-success btn-lg btn-block text-center">
                      Book Now
                    </Link>
                </div>
              </div>

              <div class="card shadow">
                <img
                  src="../images/edit.jpg"
                  class="card-img-top"
                  width="100px"
                  height="400px"></img>
                <div class="card-body">
                  <br></br>
                  <Link
                      to={"/viewb"}
                      className="btn btn-success btn-lg btn-block text-center">
                      Update
                    </Link>
                </div>
              </div>

              <div class="card shadow">
                <img
                  src="../images/report.jpg"
                  class="card-img-top"
                  width="100px"
                  height="400px"></img>
                <div class="card-body">
                  <br></br>

                  <Link
                      to={"/disb"}
                      className="btn btn-success btn-lg btn-block text-center">
                      Get E-Receipt
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
                                             </div>
                                              
                                                             </div>
                                                             </div>
                                                             </div>
      
    </div>
  );
};

export default CusDash;
