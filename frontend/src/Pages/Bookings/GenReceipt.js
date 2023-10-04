import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import {useReactToPrint} from "react-to-print"


<Link type="text/css" rel="stylesheet" href="css/stylecss"/>
const GenReceipts = () => {
  const [bookings, setBookings] = useState([]);
 
  
  const [cusName, setCName] = useState("");
  const [cusEmail, setCEmail] = useState("");
  const [resName, setRName] = useState("");
  const [resPrice, setRPrice] = useState("");
  const [bDate, setBDate] = useState("");
  
  const { id } = useParams();

  useEffect(() => {
    axios

      .get(`http://localhost:8070/booking/get/${id}`)
      .then((res) => [
        setCName(res.data.Booking.cusName),
        setCEmail(res.data.Booking.cusEmail),
        setRName(res.data.Booking.resName),
        setRPrice(res.data.Booking.resPrice),
        setBDate(res.data.Booking.bDate),
       
      ])
      .catch((error) => console.log(error));
  }, []);

  const Tax = (resPrice*10)/100;
  const Total = resPrice+ Tax;


  const componentRef= useRef();
  const handlePrint=useReactToPrint({

content:() =>componentRef.current,

  });
  

  return (
    <div>
      <br></br>
     
 
      <div className="col-md-12"> 
                    <Link
                      to="/cdashboard"
                      className="btn btn-success btn-lg btn text-center">
                      DashBoard
                    </Link></div>
                    <br></br>

      <div  ref={componentRef} >
      <div className="row">
        <h2 className="text-center">Booking Receipt</h2>
      </div>
      <br></br>
      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          
           
             <div>
                 <center>

            <table className="table text-center">
  <tr>
    <th>Customer Name</th>
    
    <td>{cusName}</td>
    
  </tr>
  <tr>
    <th>Customer Email</th>
    
    <td>{cusEmail}</td>
  </tr>
  <tr>
    <th>Resource Name</th>  
   
    <td>{resName}</td>
  </tr>
  <tr>
    <th>Booking Date</th>  
   
    <td>{bDate}</td>
  </tr>
  <tr>
    <th>Resource Price</th>  
    
    <td>{resPrice}</td>  
  </tr>
  <tr>
    <th>Tax(10%)</th>  
    
    <td>{Tax}</td>
  </tr>
</table>
<br></br>
<div>
    

<label><b>TOTAl AMOUNT</b>= {Total}  </label>

</div>



            </center>
            
             </div>

             </div>

             </div>

             <br></br>
             <br></br>
           
          
          
        </div>

       

        <div className="col-md-12"> <button
                      onClick={handlePrint}
                      className="btn btn-success btn-lg btn text-center">
                      Download And Print E-Receipt
                    </button></div>
      
    </div>
  );
};

export default GenReceipts;
