import './App.css';
import Info from "./Info";
import Contact from "./Contact";
import Gallery from "./Gallery";


function App() {
  return (
    <div className="App">
      <header className="App-header">
    <h1>Petite Vintage</h1>
      </header>
      <Info/>
      <Gallery/>
      <Contact/>
      
      <footer></footer>
    </div>
  );
}

export default App;
