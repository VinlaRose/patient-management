import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpense, fetchExpense } from "../redux/actions";
import "../App.css"
import InputForm from "./InputForm";

function Expense() {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses);
  const [sortedExpenses, setSortedExpenses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const deleteHandler = (id) => {
    console.log(id);
    dispatch(deleteExpense(id));
  }

  useEffect(() => {
    dispatch(fetchExpense());
  }, [dispatch]);

  useEffect(() => {
    setSortedExpenses([...expenses]);
  }, [expenses]);

  const sortExpenses = (sortBy) => {
    const sorted = [...sortedExpenses]; 
    if (sortBy === "ascending") {
      sorted.sort((a, b) => a.amount - b.amount);
    } else if (sortBy === "descending") {
      sorted.sort((a, b) => b.amount - a.amount);
    }
    setSortedExpenses(sorted);
  }
  
  const filterExpenses = (category) => {
    setSelectedCategory(category);
    const filtered = category === "All" ? expenses : expenses.filter(item => item.type === category);
    setSortedExpenses(filtered);
  }

  return (
    <div>
      <h1>Expenses</h1>
      <InputForm expense={true}/>
      <div>
        <label>Sort by Amount: </label>
        <button onClick={() => sortExpenses("ascending")}>Ascending</button>
<button onClick={() => sortExpenses("descending")}>Descending</button>

      </div>
      <div>
        <label>Filter by Category: </label>
        <select value={selectedCategory} onChange={(e) => filterExpenses(e.target.value)}>
          <option value="All">All</option>
          <option value="Household">Household</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Food">Food</option>
          <option value="Charity">Charity</option>
          
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
          {sortedExpenses.map((item) => (
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

export default Expense;
