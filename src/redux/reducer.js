const initialState = {
  patients: [],
  wards: [],
  loading: false,
  error: null,
};

const patientWardReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_PATIENTS_SUCCESS':
      return {
        ...state,
        patients: action.payload.data,
        loading: false,
        error: null,
      };

    case 'FETCH_PATIENTS_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error fetching patient data',
      };

    case 'ADD_PATIENT_SUCCESS':
      
      return {
        ...state,
        patients: [...state.patients, action.payload],
        loading: false,
        error: null,
      };

    case 'ADD_PATIENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error adding patient',
      };

    case 'DELETE_PATIENT_SUCCESS':
      const updatedPatients = state.patients.filter((patient) => patient._id !== action.payload._id);
      return {
        ...state,
        patients: updatedPatients,
        loading: false,
        error: null,
      };

    case 'DELETE_PATIENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error deleting patient',
      };

    case 'EDIT_PATIENT_SUCCESS':
      const editedPatients = state.patients.map((patient) =>
        patient._id === action.payload._id ? action.payload : patient
      );
      return {
        ...state,
        patients: editedPatients,
        loading: false,
        error: null,
      };

    case 'EDIT_PATIENT_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error updating patient',
      };

    case 'FETCH_WARDS_SUCCESS':
      return {
        ...state,
        wards: action.payload.data,
        loading: false,
        error: null,
      };

    case 'FETCH_WARDS_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error fetching ward data',
      };

    case 'ADD_WARD_SUCCESS':
      
      return {
        ...state,
        wards: [...state.wards, action.payload],
        loading: false,
        error: null,
      };

    case 'ADD_WARD_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error adding ward',
      };

    case 'DELETE_WARD_SUCCESS':
      const updatedWards = state.wards.filter((ward) => ward._id !== action.payload._id);
      return {
        ...state,
        wards: updatedWards,
        loading: false,
        error: null,
      };

    case 'DELETE_WARD_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error deleting ward',
      };

    case 'EDIT_WARD_SUCCESS':
      const editedWards = state.wards.map((ward) =>
        ward._id === action.payload._id ? action.payload : ward
      );
      return {
        ...state,
        wards: editedWards,
        loading: false,
        error: null,
      };

    case 'EDIT_WARD_FAILURE':
      return {
        ...state,
        loading: false,
        error: 'Error updating ward',
      };

    default:
      return state;
  }
};

export default patientWardReducer;
