// QRCodeGeneratorButton.js
import React, { useState } from "react";
import QrCodeGenerator from "./generator";
import './QRCodeGenerator.css';

function QRCodeGeneratorButton() {
  const [showQRCode, setShowQRCode] = useState(false);

  const handleButtonClick = () => {
    setShowQRCode(true);
  };
  return (
    <div>
      <button onClick={handleButtonClick}>Create QR</button>
      <br></br>
      {showQRCode && <QrCodeGenerator value="info@pciviltachira.gob.ve" size={350} />}
    </div>
  );
}

export default QRCodeGeneratorButton;