import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const AdminDashboard = () => {

  
  const [admin,setAdmin]=useState([]);
  const [name, setName] = useState("");
  const [email,setEmail]=useState("");
  const [fileName,setFileName]=useState("");
  


  useEffect(() => {

    const id=localStorage.getItem("uID");
    axios

      .get(`http://localhost:8070/admin/get/${id}`)
      .then((res) => [
        setName(res.data.admin.name),
        setEmail(res.data.admin.email),
        setAdmin(res.data),

        

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
           <img  src="/uploads/Admin/adminProfile.png" alt="..." width="250px" height="250px" class="rounded mb-2 img-thumbnail"></img>

           <div class="row">
           <Link
                      to={`//${setAdmin._id}`}
                      className="btn btn-outline-dark btn-sm btn-block">
                      Edit Profile
                    </Link>
            
            
            </div>
           </div> 
           <div class="media-body mb-5 text-white">
               
                <h4 class="mt-0 mb-0">{name}</h4>
                 <p class="small mb-4"> 
                 <i class="fas fa-map-marker-alt mr-2"></i>{email}</p>
                  </div>
                   </div>
                    </div> 
                    <div class="bg-light p-4 d- text-center">
                    <div className="row">
                       <h1 className="text-center">Admin DashBoard</h1>
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
                  src="../images/managerBtn.jpg"
                  class="card-img-top"
                  width="100px"
                  height="400px"></img>
                <div class="card-body">
                  <br></br>
                  <Link
                      to="/amanager"
                      className="btn btn-success btn-lg btn-block text-center">
                     Hotel  Managers
                    </Link>
                </div>
              </div>

              <div class="card shadow">
                <img
                  src="../images/customerBtn.jpeg"
                  class="card-img-top"
                  width="100px"
                  height="400px"></img>
                <div class="card-body">
                  <br></br>
                  <Link
                      to="/viewallcus"
                      className="btn btn-success btn-lg btn-block text-center">
                      Customers
                    </Link>
                </div>
              </div>

              <div class="card shadow">
                <img
                  src="../images/supplierBtn.jpg"
                  class="card-img-top"
                  width="100px"
                  height="400px"></img>
                <div class="card-body">
                  <br></br>

                  <Link

                      to={"/sview"}

                  

                      className="btn btn-success btn-lg btn-block text-center">
                      suppliers
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

export default AdminDashboard;
