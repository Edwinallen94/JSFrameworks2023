import "./App.css";
// import something here
import Welcome from "./components/Welcome";
import Heading from "./components/Heading";

function App() {
  return (
    <div className="App">
      <Welcome name="Jamal" />
      <Welcome />
      <Heading>Welcome to my React App!</Heading>
    </div>
  );
}

export default App;
