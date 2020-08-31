import React from 'react';
import './App.css';
import displayCard from './components/displayCard'
import CardForm from './components/displayCard';


function App() {
  return (
    <div className="App">
      <h1>UNIBUDDY Bookstore</h1>
      <h2>Search Books</h2>
      <CardForm />
    </div>
  );
}

export default App;
