/* eslint-disable no-unused-vars */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import SignUp from './components/SignUp';
import Recovery from './components/Recovery';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/recovery" element={<Recovery />} />
      </Routes>
    </>
  );
}

export default App;
