import React, { Component } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ItemDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios.get(`http://localhost:8070/item/get/${id}`).then((res) => {
      if (res.data.success) {
        this.setState({
          item: res.data.item,
        });

        console.log(this.state.item);
      }
    });
  }

  render() {
    const { name, description, qty, price } = this.state.item;
    return (
      <div className="container">
        <br />
        <button className="btn btn-secondary">
          <a href="/item" style={{ textDecoration: "none", color: "white" }}>
            Inventory Dashboard
          </a>
        </button>
        <div style={{ marginTop: "40px" }}>
          <h4>{name}</h4>
          <hr />

          <dl className="row">
            <dt className="col-sm-3">Description</dt>
            <dd className="col-sm-9">{description}</dd>

            <dt className="col-sm-3">Qty</dt>
            <dd className="col-sm-9">{qty}</dd>

            <dt className="col-sm-3">Price</dt>
            <dd className="col-sm-9">{price}</dd>

            <br></br>
            {
              <div className="col-lg-7">
                <img
                  src="../images/inventory.png"
                  height="500px"
                  width="100%"
                  className="ml-0"></img>
              </div>
            }
          </dl>
        </div>
      </div>
    );
  }
}
export default withRouter(ItemDetails);
