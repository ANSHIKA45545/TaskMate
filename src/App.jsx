import React, { useEffect, useState } from 'react'
import { TaskInput } from './Tasks/TaskInput';
import { TaskOutput } from './Tasks/TaskOutput';
import { Header } from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Register } from './components/Regsiter';

function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Header />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;