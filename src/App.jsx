import React, { useState } from 'react'
import Login from "./components/loginForm/login_form"
import QrCodeReader from "./components/reader/reader-custom";
import QrCodeGenerator from "./components/generator/generator";
import QRCodeReaderButton from "./components/reader/QRCodeReaderButton";
import QRCodeGeneratorButton from "./components/generator/QRCodeGeneratorButton";
import Navbar from './components/navbar/navbar';
import "./App.css";

function App() {

  const [showReader, setShowReader] = useState(false);
  const [showGenerator, setShowGenerator] = useState(false);

  const handleReaderClick = () => {
    setShowReader(true);
    setShowGenerator(false);
  };

  const handleGeneratorClick = () => {
    setShowReader(false);
    setShowGenerator(true);
  };

  return (
    <div>
      <Login/>
    {/*

      <Navbar />
      <br />
      <br />
      <QRCodeReaderButton onClick={handleReaderClick} />   
      <QRCodeGeneratorButton onClick={handleGeneratorClick} />
      <br />
      <br />
      <br />
      {showReader && <QrCodeReader/>}
      {showGenerator && <QrCodeGenerator value='google.com' size={350}/>} 

    */}

    </div>
  );
}

export default App;
