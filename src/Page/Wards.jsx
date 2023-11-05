import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWard, fetchWards, deleteWard, editWard } from '../redux/actions'; 
function WardsPage() {
  const dispatch = useDispatch();
  const wards = useSelector((state) => state.wards);

  const [wardNumber, setWardNumber] = useState('');
  const [capacity, setCapacity] = useState(0);
  const [specializations, setSpecializations] = useState('');

  const [editingWardId, setEditingWardId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingWardId) {
      // If editing an existing ward
      dispatch(editWard(editingWardId, { wardNumber, capacity, specializations }));
      setEditingWardId(null); // Clear the editing state
    } else {
      // If adding a new ward
      const newWard = {
        wardNumber, capacity : parseInt(capacity), specializations
      };
      console.log(newWard)
      dispatch(addWard(newWard));
    }

    // Reset the form fields
    setWardNumber('');
    setCapacity('');
    setSpecializations('');
  };

  const handleEdit = (ward) => {
    setEditingWardId(ward._id);
    setWardNumber(ward.wardNumber);
    setCapacity(ward.capacity);
    setSpecializations(ward.specializations);
  };

  const handleDelete = (ward) => {
    dispatch(deleteWard(ward._id));
  };

  useEffect(() => {
    dispatch(fetchWards());
  }, [dispatch]);

  return (
    <div className="ward-container">
      <h2>Wards Page</h2>
      <form onSubmit={handleSubmit}>
        <label>Ward Number:
          <input type="text" value={wardNumber} onChange={(e) => setWardNumber(e.target.value)} />
        </label>
        <br />
        <label>Capacity:
          <input type="number" value={capacity} onChange={(e) => setCapacity(e.target.value)} />
        </label>
        <br />
        <label>Specializations:
          <select value={specializations} onChange={(e) => setSpecializations(e.target.value)}>
            <option value="">Select Specializations</option>
            <option value="Pediatrics">Pediatrics</option>
            <option value="Surgery">Surgery</option>
            <option value="ICU">ICU</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Orthopedics">Orthopedics</option>
            <option value="Neurology">Neurology</option>
            <option value="Oncology">Oncology</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <br />
        <button type="submit">{editingWardId ? 'Edit Ward' : 'Add Ward'}</button>
      </form>
      <h3>Wards List</h3>
      <table className="wards-table">
        <thead>
          <tr>
            <th>Ward Number</th>
            <th>Specializations</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {wards.map((ward) => (
            <tr key={ward._id}>
              <td>{ward.wardNumber}</td>
              <td>{ward.specializations}</td>
              <td>
                <button onClick={() => handleEdit(ward)}>Edit</button>
                <button onClick={() => handleDelete(ward)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  );
}

export default WardsPage;
