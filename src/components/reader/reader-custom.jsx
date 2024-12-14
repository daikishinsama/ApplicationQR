import React, { useState, useEffect, useRef } from "react";
import { Html5Qrcode } from "html5-qrcode";

const QrCodeReader = () => {
  const [qrCodeData, setQrCodeData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cameraId, setCameraId] = useState(null);
  //const [html5QrcodeScanner, setHtml5QrcodeScanner] = useState(null);
  const scannerRef = useRef(null);
  const isMountedRef = useRef(false);

  // Método para iniciar el escáner
  const initScanner = async () => {
    if (isMountedRef.current) return;
    try {
       // Crear una nueva instancia de Html5Qrcode solo si no existe
       if (!scannerRef.current) {
        scannerRef.current = new Html5Qrcode("reader");
      }
      //const scanner = new Html5Qrcode("reader");
      //setHtml5QrcodeScanner(scanner);

      // Obtener lista de cámaras
      const devices = await Html5Qrcode.getCameras();
      if (devices && devices.length) {
        const firstCameraId = devices[0].id;
        setCameraId(firstCameraId);
        console.log("camaras: ", cameraId);
        console.log("cantidad de camaras: ", devices.length);
        // Configuración del escaneo
        const config = {
          fps: 12,
          qrbox: { width: 300, height: 300 },
        };

        // Iniciar escaneo
        await scannerRef.current.start(
          { facingMode: "environment" },
          config,
          handleQRCodeSuccess
        );

        setIsLoading(true);
        isMountedRef.current = true;
      }
    } catch (error) {
      console.error("Error iniciando el escáner:", error);
      setIsLoading(false);
    }
  };

  const handleStopScanning = async () => {
    try {
      if (scannerRef.current) {
        await scannerRef.current.stop();
        await scannerRef.current.clear();

        // Resetear referencias y estados
        scannerRef.current = null;
        isMountedRef.current = false;
        setIsLoading(false);
        setCameraId(null);
      }
    } catch (error) {
      console.error("Error deteniendo el escáner:", error);
    }
  };

  const handleQRCodeSuccess = (decodedText, decodedResult) => {
    setQrCodeData(decodedText);
    console.log("Código QR escaneado:", decodedText);
    setIsLoading(false);

    // Opcional: detener el escáner después de un escaneo exitoso
    handleStopScanning();
  };

  // Efecto para iniciar el escáner cuando se monte el componente
  useEffect(() => {
    
    initScanner();

    // Limpieza al desmontar
    return () => {
      handleStopScanning();
    };
  }, []);

  return (
    <div>
      <div id="reader" style={{ width: "100%" }}></div>
      {qrCodeData && (
        <div>
          <p>Código QR escaneado: {qrCodeData}</p>
        </div>
      )}
      {isLoading && <p>Escaneando...</p>}
      <button onClick={handleStopScanning} disabled={!scannerRef.current}>
        Detener Escaneo
      </button>
    </div>
  );
};

export default QrCodeReader;
