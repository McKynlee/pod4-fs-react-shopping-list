import React from 'react';
import swal from 'sweetalert';

// Import useEffect to auto-render GET on DOM on page load:
import { useEffect, useState } from 'react';

// import axios:
import axios from 'axios';

// import components:
import Header from '../Header/Header.jsx';
import ShoppingList from '../ShoppingList/ShoppingList';
import ItemForm from '../ItemForm/ItemForm';
import './App.css';

function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [newItemName, setNewItemName] = useState('');
  const [newQuantity, setNewQuantity] = useState('');
  const [newUnit, setNewUnit] = useState('');

  // auto-render db table info on DOM:
  useEffect(() => {
    fetchList();
  }, []); //end useEffect

  // POST point/list
  // Adds a new shopping list item with name, quantity, and unit when entered on the browser/Dom
  const addItem = (event) => {
    event.preventDefault();

    axios
      .post('/list', {
        name: newItemCasing(),
        quantity: newQuantity,
        unit: newUnit,
      })
      .then((response) => {
        fetchList();
        setNewItemName('');
        setNewQuantity('');
        setNewUnit('');
      })
      .catch((error) => {
        alert('Error Adding item');
        console.log('POST error:', error);
      });
  }; // end addItem


  const newItemCasing = () => {
    console.log('newItem:', newItemName);
    let otherLetters = '';

    for (let i = 1; i < newItemName.length; i++) {
      otherLetters += newItemName[i].toLowerCase();
    };

    console.log('otherLetters:', otherLetters);

    const newItemCased =
      newItemName[0].toUpperCase() + otherLetters;

    console.log('newItemCased:', newItemCased);

    return newItemCased;
  } // end newItemCasing

  // Start fetchList
  // Will get all the shopping items from the db
  const fetchList = () => {
    axios
      .get('/list')
      .then((response) => {
        //console.log('get response:', response.data);
        setShoppingList(response.data);
      })
      .catch((error) => {
        alert('Error fetching list.');
        console.log('GET error:', error);
      });
  }; // end fetchList

  // handle "Buy" button click
  // update db to show TRUE in the "isPurchased" column
  const purchasedItem = (isPurchasedID) => {
    axios
      .put(`/list/buy/${isPurchasedID}`, { isPurchased: 'TRUE' })
      .then((response) => {
        //console.log('PUT response:', response);
        fetchList();
      })
      .catch((error) => {
        alert('Could not mark as bought.');
        console.log('PUT error:', error);
      });
  }; // end purchasedItem

  // clearList will clear all the shopping items from the DOM
  const clearList = () => {
    //console.log('inClear');

    axios
      .delete('/list/clear')
      .then((response) => {
        //console.log('Clear successful');
        fetchList();
      })
      .catch((error) => {
        alert('Could not clear list.');
        console.log('Error in clearList', error);
      });
  }; // end clearList

  // deleteItem will delete specific item clicked
  const deleteItem = (deleteItemId) => {
    //console.log('deleteItem');

    axios
      .delete(`/list/delete/${deleteItemId}`)
      .then((response) => {
        //console.log('Delete successful');
        fetchList();
      })
      .catch((error) => {
        alert('Could not delete item');
        console.log('error deleting item', error);
      });
  }; // end deleteItem

  // On click, removes all purchased items from the db
  const resetList = () => {
    //console.log('in reset');

    axios
      .delete('/list/reset')
      .then((response) => {
        //console.log('reset success!');
        fetchList();
      })
      .catch((error) => {
        alert('Could not reset list.');
        console.log('error on reset', error);
      });
  }; // end resetList

  return (
    <div className="App">
      <Header />
      <main>
        <ItemForm
          newItemName={newItemName}
          newQuantity={newQuantity}
          newUnit={newUnit}
          setNewItemName={setNewItemName}
          setNewQuantity={setNewQuantity}
          setNewUnit={setNewUnit}
          handleSubmit={addItem}
        />
        <ShoppingList
          shoppingList={shoppingList}
          purchasedItem={purchasedItem}
          clearList={clearList}
          deleteItem={deleteItem}
          resetList={resetList}
        />
      </main>
    </div>
  );
}

export default App;
