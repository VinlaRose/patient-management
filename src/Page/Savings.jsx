import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteSavings, fetchSavings } from "../redux/actions";
import "../App.css"
import InputForm from "./InputForm";

function Savings() {
  const dispatch = useDispatch();
  const savings = useSelector((state) => state.savings);
  const [sortedSavings, setSortedSavings] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const deleteHandler = (id) => {
    console.log(id);
    dispatch(deleteSavings(id));
  }

  useEffect(() => {
    dispatch(fetchSavings());
  }, [dispatch]);

  useEffect(() => {
    setSortedSavings([...savings]);
  }, [savings]);

  const sortSavings = (sortBy) => {
    const sorted = [...sortedSavings];
    if (sortBy === "ascending") {
      sorted.sort((a, b) => a.amount - b.amount);
    } else if (sortBy === "descending") {
      sorted.sort((a, b) => b.amount - a.amount);
    }
    setSortedSavings(sorted);
  }

  const filterSavings = (category) => {
    setSelectedCategory(category);
    const filtered = category === "All" ? savings : savings.filter(item => item.type === category);
    setSortedSavings(filtered);
  }

  return (
    <div>
      <h1>Savings</h1>
      <InputForm saving={true}/>
      <div>
        <label>Sort by Price: </label>
        <button onClick={() => sortSavings("ascending")}>Ascending</button>
        <button onClick={() => sortSavings("descending")}>Descending</button>
      </div>
      <div>
        <label>Filter by Category: </label>
        <select value={selectedCategory} onChange={(e) => filterSavings(e.target.value)}>
          <option value="All">All</option>
          <option value="Mutualfunds">Mutualfund</option>
          <option value="RD/FD">RD or FD</option>
          <option value="Gold">Gold </option>
          

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
          {sortedSavings.map((item) => (
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

export default Savings;
