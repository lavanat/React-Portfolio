import React, { useState } from 'react';
import {  Link } from "react-router-dom";

const Navigation= () =>{
  return (
  <div>
    <li>
      <Link to="/">About Me</Link>
    </li>
    <li>
      <Link to="/portfolio">Portfolio</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/resume">Resume</Link>
    </li>
  </div>
  );
}
export default Navigation;