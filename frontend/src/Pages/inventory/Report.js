import React, { Component } from "react";

import axios from "axios";
import ReactToPrint from "react-to-print";

export default class ItemHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      //totalInventory: 0
    };
  }

  componentDidMount() {
    this.retrieveItems();
  }

  retrieveItems() {
    axios.get("http://localhost:8070/item/display").then((res) => {
      if (res.data.success) {
        this.setState({
          items: res.data.existingItems,
        });

        console.log(this.state.items);
      }
    });
  }

  render() {
    return (
      <div>
        <script
          language="javascript"
          type="javascript"
          src="ItemNav.js"></script>
        <div className="container">
          <br />
          <button className="btn btn-secondary">
            <a href="/item" style={{ textDecoration: "none", color: "white" }}>
              Inventory Dashboard
            </a>
          </button>
          <div className="row">
            <div>
              <div
                className="bill-model p-30"
                ref={(el) => {
                  this.componentRef = el;
                }}>
                <br />
                <h3 className="text-center">
                  Inventory Report of Hotel Peacock Corridor
                </h3>

                <table
                  className="table table-hover"
                  style={{ marginTop: "40px" }}>
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Item</th>
                      <th scope="col">Description</th>
                      <th scope="col">Qty</th>
                      <th scope="col">Price</th>
                      <th scope="col">Total Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.items.map((items, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <a
                            href={`/get/${items._id}`}
                            style={{ textDecoration: "none" }}>
                            {items.name}
                          </a>
                        </td>
                        <td>{items.description}</td>
                        <td>{items.qty}</td>
                        <td>{items.price}</td>
                        <td>{items.price * items.qty}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* <div className="col-md-8"></div>
           
            <div className="col-md-4" style={{marginLeft:"600px" }} >
              <div className="card card-body mt-3">
                
                <h4> Grand Total :
                  <span className="float-end">{ 0}</span>
                  </h4></div></div>  */}
              </div>
            </div>
          </div>
          <div>
            <ReactToPrint
              trigger={() => {
                return (
                  <button
                    class=" btn btn-success"
                    style={{ marginLeft: "10px", marginBottom: "20px" }}>
                    Print Report
                  </button>
                );
              }}
              content={() => this.componentRef}
              documentTitle="Inventory Report"
              pageStyles="print"
            />

          trigger={()=>{
            return  <button  className=" btn btn-success" style={{marginLeft:"10px", marginBottom:"20px" }}>Print Report</button>
          }}
          content={()=>this.componentRef}
          documentTitle='Inventory Report'
          pageStyles="print"
          </div>

          </div>
        </div>
      
    );
  }
}
