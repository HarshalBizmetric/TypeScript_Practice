import React from 'react';
import EmployeeList from './components/EmployeeList';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <EmployeeList />
      </header>
    </div>
  );
}

export default App;
