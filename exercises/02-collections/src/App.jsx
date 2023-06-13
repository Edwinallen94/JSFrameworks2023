import "./App.css";
// import something here
import { phones } from "./images/phones";
import { technologies } from "./images/technologies";

function App() {
  return (
    <div className="App">
      {Object.values(phones).map((imageurl, index) => {
        return <img alt="Phone" src={imageurl} key={`phone-${index}`} />;
      })}

      {technologies.map((item, index) => {
        return <img alt="Technology" src={item} key={`technology-${index}`} />;
      })}
    </div>
  );
}

export default App;
