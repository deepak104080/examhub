import React from 'react';
import './App.css';
import Header from './components/shared/Header';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


import Dashboard from './components/student/Dashboard';
import Examprogres from './components/student/Examprogres';
import Examresult from './components/student/Examresult';
import Examstart from './components/student/Examstart';
import Home from './components/common/Home';
import Login from './components/common/Login';

import QsAdd from './components/teacher/QsAdd';
import QsEdit from './components/teacher/QsEdit';
import QsList from './components/teacher/QsList';

function App() {
  return (

    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/examstart' element={<Examstart/>} />
          <Route path='/examprogres' element={<Examprogres/>} />
          <Route path='/examresult' element={<Examresult/>} />
          <Route path='/qslist' element={<QsList/>} />
          <Route path='/qsadd' element={<QsAdd/>} />
          <Route path='/qsedit' element={<QsEdit/>} />
          <Route path='/' element={<Home/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
