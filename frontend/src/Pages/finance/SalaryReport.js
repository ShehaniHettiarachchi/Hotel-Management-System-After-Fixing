import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import {Doughnut, Line} from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const SalaryReport = () => {
  const [allPaysheet, setAllPaysheet] = useState([]);


  useEffect(() => {
    axios
      .get("http://Localhost:8070/paysheets/")
      .then((res) => setAllPaysheet(res.data))
      .catch((error) => console.log(error));
  });

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const managerSalary = allPaysheet.filter(elem => elem.empDesignation === 'Manager').reduce((acc, elem) => acc + elem.amount, 0);
  const chefSalary = allPaysheet.filter(elem => elem.empDesignation === 'Chef').reduce((acc, elem) => acc + elem.amount, 0);
  const waiterSalary = allPaysheet.filter(elem => elem.empDesignation === 'Waiter').reduce((acc, elem) => acc + elem.amount, 0);

  //calculate total salary paid each month
    const totalSalaryPaid = allPaysheet.reduce((acc, elem) => acc + elem.amount, 0);
    const totalSalaryPaidByMonth = allPaysheet.reduce((acc, elem) => {
        const month = elem.payDate.split('-')[1];
        if(acc[month]){
            acc[month] += elem.amount;
        } else {
            acc[month] = elem.amount;
        }
        return acc;
    }, {});

  const data = {
    labels: [
      'Manager',
      'Chef',
      'Waiter'
    ],
    datasets: [{
      data: [managerSalary, chefSalary, waiterSalary],
      backgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ],
      hoverBackgroundColor: [
      '#FF6384',
      '#36A2EB',
      '#FFCE56'
      ]
    }],
  };

  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Dataset of Months',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [totalSalaryPaidByMonth["01"], totalSalaryPaidByMonth["02"], totalSalaryPaidByMonth["03"], totalSalaryPaidByMonth["04"], totalSalaryPaidByMonth["05"], totalSalaryPaidByMonth["06"], totalSalaryPaidByMonth["07"]]
      }
    ]
  };

  return (
    <div>
      <br></br>
      
      <div className="row ml-5 mr-5 mb-5 mt-5" ref={componentRef}>
      <div className="row mb-5">
            <div className="col-md-1"></div>
            <div className="col-md-4">
                <Doughnut data={data}/>
            </div>
            <div className="col-md-6">
                <Line data={lineChartData}/>
            </div>
        </div>

        <div className="col-md-1"></div>
        <div className="col-md-10">
          <table className="table text-center">
            <thead className="thead-light">
              <tr>
                <th>Empolyee ID</th>
                <th>Empolyee Name</th>
                <th>Empolyee Designation</th>
                <th>Date</th>
                <th>Bank Name</th>
                <th>Bank Account Number</th>
                <th>Amount</th>
              </tr>
            </thead>

            {allPaysheet.map((paysheet, key) => (
              <tbody>
                <tr>
                  <td>{paysheet.empid}</td>
                  <td>{paysheet.empName}</td>
                  <td>{paysheet.empDesignation}</td>
                  <td>{paysheet.payDate}</td>
                  <td>{paysheet.bankName}</td>
                  <td>{paysheet.bankAccNum}</td>
                  <td>{paysheet.amount}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className="col-md-1"></div>
      </div>

      <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 ml-5">
            <button className="btn btn-danger mb-2" onClick={
              handlePrint
            }>
              Print
            </button>
          </div>
      </div>

    </div>
  );
};

export default SalaryReport;
