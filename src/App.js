import React, { useState, useEffect } from "react";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import './App.css';
import "./Components/Grid/Grid.jsx"
import Grid from './Components/Grid/Grid.jsx';

function App() {
  const pdfExportComponent = React.useRef(null);

  const exportPDFWithMethod = () => {
    let element = document.querySelector('.k-grid') || document.body;
    savePDF(element, {
      paperSize: 'A4',
      landscape: true,
      page: 1,
    });
  };
  const [randomNumbers, setRandomNumbers] = useState([]);
  useEffect(() => {
    const generateRandomNumbers = () => {
      let numbersSet = new Set();

      while (numbersSet.size < 4) {
        const randomNumber = Math.floor(Math.random() * 400) + 1;
        numbersSet.add(randomNumber);
      }

      const uniqueNumbers = Array.from(numbersSet);
      setRandomNumbers(uniqueNumbers);
    };

    generateRandomNumbers();
  }, []);

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="Background">
      <PDFExport ref={pdfExportComponent} paperSize="A4" fileName='Gatto_Druk' pageTemplate={1}>
          <Grid randomNumbers={randomNumbers}/>
      </PDFExport>
      <button onClick={refreshPage}>Refresh Images</button>
      <button onClick={exportPDFWithMethod} className='Button'>Click to save PDF</button>
    </div>
  );
}

export default App;