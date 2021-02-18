import React from 'react';
import axios from 'axios';
import Header from '../Header/Header.jsx';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  let [newItemName, setNewItemName] = useState('');
  let [newQuantity, setNewQuantity] = useState('');
  let [newUnit, setNewUnit] = useState('');

  //POST route
  const addItem = () => {
    axios
      .post('/list', {
        name: newItemName,
        quantity: newQuantity,
        unit: newUnit,
      })
      .then((response) => {
        fetchList();
      })
      .catch((err) => {
        alert('Error Adding item');
        console.log(err);
      });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <p>Under Construction...</p>
      </main>
    </div>
  );
}

export default App;
