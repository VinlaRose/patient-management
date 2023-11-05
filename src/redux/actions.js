export const fetchPatients = () => async (dispatch) => {
  try {
    const response = await fetch('https://patient-management-system.vinlarose.repl.co/patients');
    const data = await response.json();
    console.log(data)
    dispatch({ type: 'FETCH_PATIENTS_SUCCESS', payload: data });
  } catch (error) {
    console.error('Error fetching patient data:', error);
    dispatch({ type: 'FETCH_PATIENTS_FAILURE' });
  }
};

export const addPatient = (patientData) => async (dispatch) => {
  try {
    const response = await fetch('https://patient-management-system.vinlarose.repl.co/patients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patientData),
    });

    if (!response.ok) {
      throw new Error('Failed to add patient');
    }

    const addedPatient = await response.json();
    
    dispatch({ type: 'ADD_PATIENT_SUCCESS', payload: addedPatient.data });
  } catch (error) {
    console.error('Error adding patient:', error);
    dispatch({ type: 'ADD_PATIENT_FAILURE' });
  }
};

export const deletePatient = (patientId) => async (dispatch) => {
  try {
    const response = await fetch(`https://patient-management-system.vinlarose.repl.co/patients/${patientId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete patient');
    }

    const deletedPatient = await response.json();
    dispatch({ type: 'DELETE_PATIENT_SUCCESS', payload: deletedPatient.data });
  } catch (error) {
    console.error('Error deleting patient:', error);
    dispatch({ type: 'DELETE_PATIENT_FAILURE' });
  }
};

export const editPatient = (patientId, patientData) => async (dispatch) => {
  try {
    const response = await fetch(`https://patient-management-system.vinlarose.repl.co/patients/${patientId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(patientData),
    });

    if (!response.ok) {
      throw new Error('Failed to update patient');
    }

    const updatedPatient = await response.json();
    dispatch({ type: 'EDIT_PATIENT_SUCCESS', payload: updatedPatient.data });
  } catch (error) {
    console.error('Error updating patient:', error);
    dispatch({ type: 'EDIT_PATIENT_FAILURE' });
  }
};
export const fetchWards = () => async (dispatch) => {
  try {
    const response = await fetch('https://patient-management-system.vinlarose.repl.co/wards');
    const data = await response.json();
    dispatch({ type: 'FETCH_WARDS_SUCCESS', payload: data });
  } catch (error) {
    console.error('Error fetching ward data:', error);
    dispatch({ type: 'FETCH_WARDS_FAILURE' });
  }
};

export const addWard = (wardData) => async (dispatch) => {
  
  try {
    const response = await fetch('https://patient-management-system.vinlarose.repl.co/wards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wardData),
    });
console.log(response)
    if (!response.ok) {
      throw new Error('Failed to add ward');
    }

    const addedWard = await response.json();
    console.log(addedWard)
    dispatch({ type: 'ADD_WARD_SUCCESS', payload: addedWard.data });
  } catch (error) {
    console.error('Error adding ward:', error);
    dispatch({ type: 'ADD_WARD_FAILURE' });
  }
};

export const deleteWard = (wardId) => async (dispatch) => {
  try {
    const response = await fetch(`https://patient-management-system.vinlarose.repl.co/wards/${wardId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete ward');
    }

    const deletedWard = await response.json();
    dispatch({ type: 'DELETE_WARD_SUCCESS', payload: deletedWard.data });
  } catch (error) {
    console.error('Error deleting ward:', error);
    dispatch({ type: 'DELETE_WARD_FAILURE' });
  }
};

export const editWard = (wardId, wardData) => async (dispatch) => {
  try {
    const response = await fetch(`https://patient-management-system.vinlarose.repl.co/wards/${wardId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wardData),
    });

    if (!response.ok) {
      throw new Error('Failed to update ward');
    }

    const updatedWard = await response.json();
    dispatch({ type: 'EDIT_WARD_SUCCESS', payload: updatedWard.data });
  } catch (error) {
    console.error('Error updating ward:', error);
    dispatch({ type: 'EDIT_WARD_FAILURE' });
  }
};
