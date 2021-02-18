import React from 'react';

// Import useEffect to auto-render GET on DOM on page load:
import { useEffect, useState } from 'react';

// import axios:
import axios from 'axios';

// import components:
import Header from '../Header/Header.jsx';
import ItemForm from '../ItemForm/ItemForm';
import './App.css';

function App() {
  const [shoppingList, setShoppingList] = useState([]);

  let [newItemName, setNewItemName] = useState('');
  let [newQuantity, setNewQuantity] = useState('');
  let [newUnit, setNewUnit] = useState('');

  // auto-render db table info on DOM:
  useEffect(() => {
    fetchList();
  }, []); //end useEffect

  const fetchList = () => {
    axios
      .get('/list')
      .then((response) => {
        console.log('get response:', response.data);
        setShoppingList(response.data);
      })
      .catch((error) => {
        console.log('GET error:', error);
      });
  }; // end fetchList

  function handleSubmit(event) {
    event.preventDefault();
    console.log('in submit');
    console.log('name', newItemName);
    console.log('qty', newQuantity);
  }

  return (
    <div className="App">
      <Header />
      <ItemForm
        newItemName={newItemName}
        newQuantity={newQuantity}
        newUnit={newUnit}
        setNewItemName={setNewItemName}
        setNewQuantity={setNewQuantity}
        setNewUnit={setNewUnit}
        handleSubmit={handleSubmit}
      />
      <main>
        <p>Under Construction...</p>
      </main>
    </div>
  );
}

export default App;
