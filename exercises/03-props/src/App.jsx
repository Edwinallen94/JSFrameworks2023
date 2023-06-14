<<<<<<< HEAD
import "./App.css";
// import something here
import Welcome from "./components/Welcome";
import Heading from "./components/Heading";
=======
import './App.css';

import { Heading } from './components/Heading/Heading';
import { Welcome } from './components/Heading/welcome/Welcome';
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Welcome name="Jamal" />
      <Welcome />
      <Heading>Welcome to my React App!</Heading>
=======
      <Heading>Welcome to my React App</Heading>
      <Welcome name="Ariadna" />
      <Welcome />
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
    </div>
  );
}

export default App;
