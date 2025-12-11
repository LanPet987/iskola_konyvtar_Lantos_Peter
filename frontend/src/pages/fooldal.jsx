import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import CustomNavbar from "../components/navbar.jsx";

function Fooldal() {
  return (
    <div>
        <CustomNavbar />
      <h1>Főoldal</h1>
    </div>
  );
}

export default Fooldal;