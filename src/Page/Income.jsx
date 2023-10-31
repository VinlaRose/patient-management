import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteIncome, fetchIncome } from "../redux/actions";
import "../App.css";
import InputForm from "./InputForm";

function Income() {
  const dispatch = useDispatch();
  const income = useSelector((state) => state.income);
  const [sortedIncome, setSortedIncome] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const deleteHandler = (id) => {
    console.log(id);
    dispatch(deleteIncome(id));
  }

  useEffect(() => {
    dispatch(fetchIncome());
  }, [dispatch]);

  useEffect(() => {
    setSortedIncome([...income]);
  }, [income]);

  const sortIncome = (sortBy) => {
    const sorted = [...sortedIncome];
    if (sortBy === "ascending") {
      sorted.sort((a, b) => a.amount - b.amount);
    } else if (sortBy === "descending") {
      sorted.sort((a, b) => b.amount - a.amount);
    }
    setSortedIncome(sorted);
  }

  const filterIncome = (category) => {
    setSelectedCategory(category);
    const filtered = category === "All" ? income : income.filter(item => item.type === category);
    setSortedIncome(filtered);
  }

  return (
    <div>
      <h1>Income</h1>
      <InputForm income={true}/>
      <div>
        <label>Sort by Price: </label>
        <button onClick={() => sortIncome("ascending")}>Ascending</button>
        <button onClick={() => sortIncome("descending")}>Descending</button>
      </div>
      <div>
        <label>Filter by Category: </label>
        <select value={selectedCategory} onChange={(e) => filterIncome(e.target.value)}>
          <option value="All">All</option>
          <option value="Salary">Salary </option>
          <option value="Business">Business </option>
          <option value="Investment returns">Investment returns </option>
          
        </select>
      </div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Created At</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {sortedIncome.map((item) => (
            <tr key={item._id}>
              <td>{item.description}</td>
              <td>{item.amount}</td>
              <td>{item.type}</td>
              <td>{item.createdAt}</td>
              <td><button onClick={() => deleteHandler(item._id)}>DELETE</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Income;
