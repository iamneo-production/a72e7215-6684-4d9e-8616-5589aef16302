import React from 'react'
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";

import Signin from './Signin'
import Signin1 from './Signin1'
import Signup from './Signup'
import HomePage from './HomePage'
import Footer from './Footer'
import Home from './Home'
import Get from './Get'
import Form from './Form'
import Contact from './Contact';
import About from './About';
import SurveyForm from './SurveyForm';
import Analysis from './Analysis'
import Share from './Share'
import Response from './Response'
import Csv from './Csv'


function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route exact path="/" element={<Signin/>}></Route>
        <Route exact path="/Signin1" element={<Signin1/>}></Route>
        <Route exact path="/Signup" element={<Signup/>}></Route>
        <Route exact path="/Home" element={<Home/>}></Route>
        <Route exact path="/SurveyForm" element={<SurveyForm/>}></Route>
        <Route exact path="/Share" element={<Share/>}></Route>
        <Route exact path="/Response" element={<Response/>}></Route>
        <Route exact path="/Analysis" element={<Analysis/>}></Route>
        <Route exact path="/Csv" element={<Csv/>}></Route>
        <Route exact path="/About" element={<About/>}></Route>
        <Route exact path="/Contact" element={<Contact/>}></Route>
       </Routes>
    </Router>
       {/* <Analysis/> */}
    </div>
  )
}

export default App