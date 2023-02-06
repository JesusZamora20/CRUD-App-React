import React from 'react';
import CrudApp from "./components/crudApp";
import CrudApi from './components/crudApi';


function App() {
  return (
    <div className="App">
      <h2>Ejercicios React</h2>
      <hr />
      <CrudApi />
      < hr />
      <CrudApp />
    </div>
  );
}

export default App;
