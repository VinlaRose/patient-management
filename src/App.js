import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {PatientsPage} from './Page/Patients';
import WardsPage from './Page/Wards';

function App() {
const dispatch = useDispatch();



  return (
    <div className="App">
      
      <nav>
            <ul>
              <li>
                
                <Link to="/patients">Patients</Link>
              </li>
              <li>
                <Link to="/wards">Wards</Link>
              </li>
              <li>
                <Link to="/">Hospital</Link>
              </li>
              
            </ul>
          </nav>
          
      <Routes>
        <Route path="/patients" element={<PatientsPage/>} />
        <Route path="/wards" element={<WardsPage/>} />
        <Route path="/" element={<PatientsPage/>} />
       
        
        
      </Routes>
    </div>
  );
}

export default App;