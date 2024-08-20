import React, { useState, useEffect } from "react";
import { Html5Qrcode } from "html5-qrcode";

const QrCodeReader = () => {
  const [qrCodeData, setQrCodeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isScanning, setIsScanning] = useState(true); // Control scanning state
  const [myState, setMyState] = useState(1);
  const [myDevice, setMyDevice] = useState("r");

  let html5QrcodeScanner;
  let cameraId;
  useEffect(() => {
    console.log("mis estado:...", myState);
    debugger;
    if (myState === 1 && html5QrcodeScanner === undefined) {
      html5QrcodeScanner = new Html5Qrcode("reader");
      const initScanner = async () => {
        setIsLoading(true);

        Html5Qrcode.getCameras()
          .then((devices) => {
            if (devices && devices.length) {
              devices.forEach((device) => {
                console.log(`ID: ${device.id}, Label: ${device.label}`);
              });
              cameraId = devices[0].id;
              // .. use this to start scanning.
              setMyDevice(cameraId);
            }
            setMyState(2);
          })
          .catch((err) => {
            // handle err
            console.error("marica");
          });

        const qrCodeSuccessCallback = (decodedText, decodedResult) => {
          /* handle success */
          debugger;
          setIsLoading(false);
          setQrCodeData(decodedText);

          console.log("resultado", decodedResult);
          html5QrcodeScanner.clear();
        };
        const config = { fps: 10, qrbox: { width: 300, height: 300 } };

        html5QrcodeScanner
          .start({ facingMode: "environment" }, config, qrCodeSuccessCallback)
          .catch((err) => {
            console.error("QR code scanning ERROR!!:", err);
            setIsLoading(false);
          });
        //}
      };

      initScanner();
    }

    // Clean up scanner on component unmount
    return () => {
      console.log("se desmonta...", myState);
      debugger;
    };
  }, []); // Dependency for scanning state updates

  const handleStopScanning = () => {
    debugger;
    setIsScanning(false); // Trigger scanner stop
    html5QrcodeScanner
      .stop()
      .then((ignore) => {
        // QR Code scanning is stopped.
        console.log("detenido");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div id="reader" width="500" height="500" />
      <div className="qr-code-reader" >
        {isLoading && <p>Scanning QR code...</p>}
        {qrCodeData && <p>Scanned data: {qrCodeData}</p>}
        {myDevice && <p>Camaras: {myDevice}</p>}
        <button onClick={handleStopScanning}>Stop Scanning</button>
      </div>
    </>
  );
};

export default QrCodeReader;
