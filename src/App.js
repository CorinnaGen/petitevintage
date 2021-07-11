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
      <main>
      <Info/>
      <br/>
      <Gallery/>
      <br/>
      <Contact/>
      </main>
      <footer><a href="https://github.com/CorinnaGen">Who did this?</a></footer>
    </div>
  );
}

export default App;
