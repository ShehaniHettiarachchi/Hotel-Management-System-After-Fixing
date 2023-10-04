import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const ViewFeedback = () => {
  const [allFeedback, setAllFeedback] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8070/feedback/")
      .then((res) => setAllFeedback(res.data))
      .catch((error) => console.log(error));
  });

  return (
    <div>
      <br></br>
      <div className="row">
        <h1 className="text-center">All Feedbacks</h1>
      </div>
      <br></br>
      <div className="row">
        <div className="col-md-1"></div>

        <div className="col-md-10">
          <table className="table text-center">
            <thead className="thead-light">
              <th>Customer Email</th>
              <th>Feedback</th>
            </thead>

            {allFeedback.map((setAllFeedback, key) => (
              <tbody>
                <tr>
                  <td>{setAllFeedback.cusEmail}</td>
                  <td>{setAllFeedback.message}</td>
                </tr>
              </tbody>
            ))}
          </table>
          <Link to="/feedback" className="btn btn-warning">
            Add Your Feedback
          </Link>
        </div>

        <div className="col-md-1"></div>
      </div>
    </div>
  );
};

export default ViewFeedback;
