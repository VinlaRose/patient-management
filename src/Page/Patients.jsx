import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPatient, deletePatient, fetchPatients } from '../redux/actions'; 
import AddPatientModal from '../components/AddPatintModal';
import EditPatientModal from '../components/EditPatientModal';

export const PatientsPage = () => {
  const dispatch = useDispatch()
  const patients = useSelector(state => state.patients);
  console.log(patients)
  const wards = useSelector(state => state.wards)
  const [openModal, setOpenModal] = useState(false);
 const [openEditModal, setEditModal] = useState(false)
const openAddPatientModal = () => {
  setOpenModal(true)
}
const closeAddPatientModal = () => {
  setOpenModal(false)
}

const closeEditPatientModal = () => {
  setEditModal(false)
}

const handleEdit = () => {
 setEditModal(true)
};

const handleDelete = (patient) => {
  dispatch(deletePatient(patient._id));
};

useEffect(() => {
  dispatch(fetchPatients());
}, [dispatch]);
  return(
    <div>
      <h3>Patient List</h3>
      <button onClick={openAddPatientModal}>Add New Patient</button>
     <AddPatientModal openModal={openModal} onRequestClose={closeAddPatientModal} />
     <EditPatientModal openEditModal={openEditModal} onRequestClose={closeEditPatientModal} />
     <table className="wards-table">
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Ward</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient._id}>
              <td>{patient.name.fistName} {patient.name.lastName}</td>
              <td>{patient.assignedWard.wardNumber}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>
                <button onClick={() => handleEdit(patient)}>Edit</button>
                <button onClick={() => handleDelete(patient)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
        </table>
      
    </div>
  )
}
