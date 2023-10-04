import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class FoodHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.retrieveFoods();
  }

  retrieveFoods() {
    axios.get("http://localhost:8070/item/display").then((res) => {
      if (res.data.success) {
        this.setState({
          items: res.data.existingItems,
        });

        console.log(this.state.items);
      }
    });
  }

  onDelete = (id) => {
    if (window.confirm("Are you sure you wish to delete this item?")) {
      axios.delete(`http://localhost:8070/item/delete/${id}`).then((res) => {
        alert("Deleted Successfully");
        this.retrieveItems();
      });
    }
  };

  filterData(items, searchKey) {
    const result = items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchKey) ||
        item.description.toLowerCase().includes(searchKey),
    );
    this.setState({ items: result });
  }

  handleSearchArea = (e) => {
    const searchKey = e.currentTarget.value;

    axios.get("http://localhost:8070/item/display").then((res) => {
      if (res.data.success) {
        this.filterData(res.data.existingItems, searchKey);
      }
    });
  };

  render() {
    return (
      <>
        <script
          language="javascript"
          type="javascript"
          src="ItemNav.js"></script>
        <div className="container">
          <div id="ItemNav"></div>
          <div className="row">
            <div className="col-lg-9 mt-2 mb-2">
              <h4>Inventory</h4>
            </div>
            <div className="col-lg-3 mt-2 mb-2">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                name="searchQuery"
                onChange={this.handleSearchArea}></input>
            </div>
          </div>
          <table className="table table-hover" style={{ marginTop: "40px" }}>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Item</th>
                <th scope="col">Description</th>
                <th scope="col">Qty</th>
                <th scope="col">Price</th>
                <th scope="col">Action</th>
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
                  <td>
                    <a className="btn btn-warning" href={`/editi/${items._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit
                    </a>
                    &nbsp;
                    <a
                      className="btn btn-danger"
                      href="/item"
                      onClick={() => this.onDelete(items._id)}>
                      <i className="far fa-trash-alt"></i>&nbsp;Delete
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Create New Item</a></button>  */}
          <button>
            <Link to="/addi" className="btn btn-primary">
              Create New Item
            </Link>
          </button>
        </div>
      </>
    );
  }
}
