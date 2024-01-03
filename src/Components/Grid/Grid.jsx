
import "./Grid.styles.css";
import AnimalImages from "../animalImages/animalImages";
import QR from "../../QR.png";

function Grid({randomNumbers}) {

  return (
    <div className="Screen">
      {randomNumbers.map((number, index) => (
        <div key={index} className="Image">
            <AnimalImages number={number}/>
        </div>
      ))}
      <img src={QR} alt="QR" className="QR"/>
    </div>
  );
}

export default Grid;