import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const UpdateFood = () => {
  //const [food,setFood]=useState([])

  const [name, setName] = useState("");
  const [foodid, setFId] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  const changeOnClick = (e) => {
    e.preventDefault();

    const Food = {
      name,
      foodid,
      description,
      price,
    };

    setName("");
    setFId("");
    setDescription("");
    setPrice("");

    axios
      .put(`http://localhost:8070/foods/update/${id}`, Food)
      .then((res) => {
        console.log(res.data);
        navigate("/viewfood");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const { id } = useParams();

  useEffect(() => {
    axios

      .get(`http://localhost:8070/foods/get/${id}`)
      .then((res) => [
        setName(res.data.food.name),
        setFId(res.data.food.foodid),
        setDescription(res.data.food.description),
        setPrice(res.data.food.price),
      ])
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-lg-4 ml-5">
          <h1 className="text-center">Food Update Page</h1>
        </div>
      </div>

      <br></br>

      <div className="row">
        <div className="col-lg-0 col-0 ml-5"></div>

        <div className="col-lg-5 col-12">
          <div className="border ml-3 mr-3 bg-light shadow  ">
            <form className="mt-3 ml-3 mr-3 mb-3" onSubmit={changeOnClick}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Food Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  id="name"
                  placeholder="Enter"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}></input>
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Food ID
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={foodid}
                  id="foodid"
                  placeholder="Enter"
                  onChange={(e) => {
                    setFId(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Food Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  value={description}
                  id="description"
                  placeholder="Enter"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}></input>
              </div>

              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Food Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  value={price}
                  id="price"
                  placeholder="Enter"
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}></input>
              </div>

              <button type="submit" className="btn btn-primary">
                Update Food
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-6 col-12">
          <img
            src="../images/food.jpg"
            height="620px"
            width="100%"
            className="ml-4"></img>
        </div>
        <div className="col-lg-1 col-0"></div>
      </div>
    </div>
  );
};

export default UpdateFood;
