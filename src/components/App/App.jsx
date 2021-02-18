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

  const [newItemName, setNewItemName] = useState('');
  const [newItemQty, setNewItemQty] = useState('');
  const [newItemUnit, setNewItemUnit] = useState('');

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
    console.log('qty', newItemQty);
    console.log('unit', newItemUnit);
  }

  return (
    <div className="App">
      <Header />
      <ItemForm
        newItemName={newItemName}
        newItemQty={newItemQty}
        newItemUnit={newItemUnit}
        setNewItemName={setNewItemName}
        setNewItemQty={setNewItemQty}
        setNewItemUnit={setNewItemUnit}
        handleSubmit={handleSubmit}
      />
      <main>
        <p>Under Construction...</p>
      </main>
    </div>
  );
}

export default App;
