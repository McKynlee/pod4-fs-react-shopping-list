import React from 'react';

import Header from '../Header/Header.jsx';
import './App.css';
import ShoppingList from '../ShoppingList/ShoppingList';

function App() {
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
