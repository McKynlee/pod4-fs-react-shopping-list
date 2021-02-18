import React from 'react';

// Import useEffect to auto-render GET on DOM on page load:
import { useEffect, useState } from 'react';

// import axios:
import axios from 'axios';

// import components:
import Header from '../Header/Header.jsx'
import './App.css';

function App() {

  const [shoppingList, setShoppingList] = useState([]);

  // auto-render db table info on DOM:
  useEffect(() => {
    fetchList();
  }, []); //end useEffect

  const fetchList = () => {
    axios.get('/list')
      .then(response => {
        console.log('get response:', response.data);
        setShoppingList(response.data);
      })
      .catch(error => {
        console.log('GET error:', error);
      })
  }// end fetchList

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
