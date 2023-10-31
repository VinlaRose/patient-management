import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export const Report = () => {

  const report = useSelector(state  => state);
  console.log(report)

  return (
    <div>
      <h1>Report</h1>
      <div className="container">
      <div className="box">
        <div className="data">
          <h3 className="heading">Total Expenses</h3>
          <h1>{report.expenses.reduce((acc,curr) => acc + curr.amount, 0) }</h1>
        </div>
      </div>
      <div className="box">
        <div className="data">
          <h3 className="heading">Total Savings</h3>
          <h1>{report.savings.reduce((acc,curr) => acc + curr.amount, 0) }</h1>
        </div>
      </div>
      <div className="box">
        <div className="data">
          <h3 className="heading">Total Income</h3>
          <h1>{report.income.reduce((acc,curr) => acc + curr.amount, 0) }</h1>
        </div>
      </div>
      </div>
      
    </div>
  );
}


