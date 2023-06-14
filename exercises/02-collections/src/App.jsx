<<<<<<< HEAD
import "./App.css";
// import something here
import { phones } from "./images/phones";
import { technologies } from "./images/technologies";
=======
import './App.css';

import { phones } from './images/phones';
import { technologies } from './images/technologies';
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {Object.values(phones).map((imageurl, index) => {
        return <img alt="Phone" src={imageurl} key={`phone-${index}`} />;
      })}

      {technologies.map((item, index) => {
        return <img alt="Technology" src={item} key={`technology-${index}`} />;
=======
      {Object.values(phones).map((imageUrl, index) => {
        return <img alt="a phone" src={imageUrl} key={`phone-${index}`} />;
      })}

      {technologies.map((item, index) => {
        return (
          <img alt="a technology" src={item} key={`technology-${index}`} />
        );
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
      })}
    </div>
  );
}

export default App;
