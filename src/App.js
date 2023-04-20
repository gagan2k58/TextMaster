

import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import { Routes, Route } from "react-router-dom";
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';

function App() {
  const [mode, setMode] = useState("light")

  const [alert, setAlert] = useState(null)

  const showAlert =(message,type)=>{
    setAlert({
      msg : message ,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 5000);
  }

  const toggleMode = ()=>{
    if (mode=== "light"){
      setMode("dark");
      document.body.style.backgroundColor ="grey";
      showAlert("Dark mode is Enable","success");
      document.title="TextMaster - Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor ="white";
      showAlert("Light mode is Enable","success");
      document.title="TextMaster - Light Mode";
    }

  }
  return (
    <>
       
       
     
       <Navbar title="TextMaster" about ="About" mode={mode} toggleMode={toggleMode}/>
       <Alert alert={alert}/>
       {/* <div className="container" > */}
         {/* <TextForm showAlert={showAlert} heading = "Enter the text to analays" mode={mode} />  */}
         {/* <About /> */}
       {/* </div> */}
     <Routes>
        <Route path="/" element={
         <TextForm showAlert={showAlert} heading = "Enter the text to analays" mode={mode} /> 
        
       } />
           <Route path="/about" element={
         
         <About mode={mode} />
       } />
          
       
      </Routes>
           
    </>
   
  );
}

export default App;
