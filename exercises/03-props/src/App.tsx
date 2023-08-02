import "./App.css";
// import something here
import Welcome from "./components/Heading/welcome/Welcome";
import Heading from "./components/Heading/Heading";

function App() {
  return (
    <div className="App">
      <Heading>Welcome to my React App</Heading>
      <Welcome name="Edwin" />
      <Welcome />
    </div>
  );
}

export default App;
