import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const [txt, setTxt]=useState('dark')
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type) =>{
      setAlert({
        msg : message,
        type : type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark')
      setTxt('light')
      document.body.style.backgroundColor='black'
      document.body.style.color='white'
      document.title="TextUtils-Dark Mode"
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light')
      setTxt('dark')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
      document.title="TextUtils-Light Mode"
      showAlert("Light mode has been enabled","success");
    }
  }

  
  return (
    <>
    <Router>
      <Navbar title="TextUtils123" abtText="About us" mode={mode} toggleMode={toggleMode}  txtColor={txt}/>
      <Alert alert={alert}/>
      <div className="container my-3">

      
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>} />
          <Route path="/about" element={<About />} />
        </Routes>
      
        
      </div>
    </Router>
      
    </>
  );
}

export default App;
