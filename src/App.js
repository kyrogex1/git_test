import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="header">
          <p>Navbar tab1</p>
          <p>Navbar tab2</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reloadsssss.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div>
            <p>Learn React3</p>
          </div>
        </a>
        <div>
          <p>Body1</p>
          <p>Body2</p>
        </div>
      </header>
    </div>
  );
}

export default App;
