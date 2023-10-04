import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ToolkitProvider, {Search} from 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit';
import BootstrapTable from 'react-bootstrap-table-next';

const MySearch = (props) => {
  let input;
  const handleClick = () => {
    props.onSearch(input.value);
  };
  const clearSearch = () => {
    props.onSearch("");

  };


  return (
    <div className="row">
      <div className="col-md-4"></div>
      <div className="col-lg-5 col-12 mb-2 mt-2 form-inline" 
        style={{ marginLeft: -10}}
        >
        <form>
          <input
            className="form-control mr-sm-2"
            placeholder="Search"
            aria-label="Search"
            ref={ n => input = n }
            type="text"
          />
          <button className="btn btn-success my-2 my-sm-0" type="button" onClick={ handleClick }>
              Search
          </button>
          <button className="btn btn-primary my-2 my-sm-0 ml-1" type="reset" onClick={ clearSearch }>
                Clear
          </button>
        </form>
      </div>
    </div>
  );
};




const ViewPaysheet = () => {
  const [allPaysheet, setAllPaysheet] = useState([]);

  useEffect(() => {
    axios
      .get("http://Localhost:8070/paysheets/")
      .then((res) => setAllPaysheet(res.data))
      .catch((error) => console.log(error));
  });

  const deletePaysheet = (id) => {
    axios
      .delete(`http://localhost:8070/paysheets/delete/${id}`)
      .then((res) => alert("Paysheet Deleted"));

    setAllPaysheet(allPaysheet.filter((elem) => elem.id !== id));
  };

  const columns = [
    {
      dataField: "_id",
      text: "ID",
      hidden: true,
    },
    {
      dataField: "empid",
      text: "Empolyee ID",
      sort: true,
    },
    {
      dataField: "empName",
      text: "Employee Name",
      sort: true,
    },
    {
      dataField: "empDesignation",
      text: "Employee Designation",
      sort: true,
    },
    {
      dataField: "payDate",
      text: "Pay Date",
      sort: true,
    },
    {
      dataField: "bankName",
      text: "Bank Name",
      sort: true,
    },
    {
      dataField: "bankAccNum",
      text: "Bank Account Number",
      sort: true,
    },
    {
      dataField: "amount",
      text: "Amount",
      sort: true,
    },
    {
      dataField: "empid",
      text: "EDIT",
      formatter: (cellContent, row) => {
        return (
          <Link to={`/updatepaysheet/${row._id}`}>
            <button className="btn btn-warning">Update</button>
          </Link>
        );
      },
    },
    {
      dataField: "empid",
      text: "DELETE",
      formatter: (cellContent, row) => {
        return (
          <button
              onClick={() => deletePaysheet(row._id)}
              className="btn btn-danger">
              Delete
          </button>
        );
      },
    },
  ];

  return (
    <div>
      <ToolkitProvider
        keyField="id"
        data={ allPaysheet }
        columns={ columns }
        search
      >
          {
            props => (
              <div className="row mb-2">
                <div className="col-md-1"></div>
                <div className="col-md-10">
                <h3 className="text-center mt-3 mb-1">All Employees Payment Details</h3>
                <MySearch { ...props.searchProps } />
                <hr />
                <BootstrapTable
                  { ...props.baseProps }
                  headerClasses = "thead-light"
                  classes = "table text-center"
                />
                </div>
              </div>
            )
          }
      </ToolkitProvider>
      <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <button className="btn btn-primary mb-2" onClick={
              () => {
                window.location.href = "/salaryreport";
              }
            }>
              Generate Salary Report
            </button>
          </div>
      </div>
    </div>
  );
};

export default ViewPaysheet;
