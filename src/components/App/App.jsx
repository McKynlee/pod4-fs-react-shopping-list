import React from 'react';

// Import useEffect to auto-render GET on DOM on page load:
import { useEffect, useState } from 'react';

// import axios:
import axios from 'axios';

// import components:
import Header from '../Header/Header.jsx';
import ShoppingList from '../ShoppingList/ShoppingList';
import './App.css';

function App() {
  const [shoppingList, setShoppingList] = useState([]);

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

  // handle "Buy" button click
  // update db to show TRUE in the "isPurchased" column
  const purchasedItem = (isPurchasedID) => {
    console.log('*** in purchasedItem() ***');
    console.log('isPurchasedID:', isPurchasedID);

    axios({
      method: 'PUT',
      url: `/list/buy/${isPurchasedID}`,
      data: {
        isPurchased: 'TRUE',
      },
    })
      .then((response) => {
        console.log('PUT response:', response);
        /* placeholder to render DOM with updated DB */
      })
      .catch((error) => {
        console.log('PUT error:', error);
      });
  }; // end purchasedItem

  return (
    <div className="App">
      <Header />
      <main>
        <ShoppingList />
      </main>
    </div>
  );
}

export default App;
