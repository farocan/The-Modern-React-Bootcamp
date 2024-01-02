import logo from './logo.svg';
import './App.css';
import Ball from './Ball';

function App() {
  return (
    <div className="App">
      <Ball num={17} />
      <Ball num={13} />
      <Ball num={11} />
      <Ball num={9} />
    </div>
  );
}

export default App;
