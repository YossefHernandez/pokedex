import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Searchbar />
      <h1>Hola</h1>
    </div>
  );
}

export default App;
