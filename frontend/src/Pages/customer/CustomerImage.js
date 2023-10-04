import React, { useState ,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CustomerImage() {

  const [filename, setFileName] = useState("");

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const navigate = useNavigate();
  const id=localStorage.getItem("uID");

  function sendData(e) {
    e.preventDefault();

    alert("Profile Image Changed");

    const formData = new FormData();

    formData.append("customerImage", filename);


    axios
      .put(`http://localhost:8070/customer/update/${id}`, formData)
      .then((res) => {
        console.log(res.data);
        navigate("/cdashboard");
      })
      .catch((err) => {
        console.log(err);
      });

  }

  useEffect(() => {
      
  
    axios
      .get(`http://Localhost:8070/customer/get/${id}`)
      .then((res) => [
        console.log(res.data.customer.name),
       
        setFileName(res.data.customer.customerImage),
      ])
      .catch((error) => console.log(error));
  }, []);




  return (
    <div>
      <br></br>
      <div class="row">
        <div class="col-lg-4 ml-5">
          <h1 class="text-center">Profile Image Edit Page</h1>
        </div>
      </div>
      <br />

      <div class="row">
        <div class="col-lg-0 col-0 ml-5"></div>

        <div class="col-lg-5 col-12">
          <div class="border ml-3 mr-3 bg-light shadow  ">
            <form class="mt-3 ml-3 mr-3 mb-3" onSubmit={sendData} encType="multipart/form-data">

              <div className="form-group">
                <label htmlFor="file">Customer Image</label>
                <input
                  type="file"
                  accept=".png .jpg .jpeg"
                  filename="CustomerImage"
                  className="form-control-file"
                  onChange={onChangeFile}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg btn-block text-center">
                Upload
              </button>
            </form>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <img
            src="../images/addres.jpg"
            height="600px"
            width="100%"
            class="ml-4"></img>
        </div>

        <div class="col-lg-1 col-0"></div>
      </div>
    </div>
  );
}
