import './ShoppingList.css';
import ItemComponent from '../ItemComponent/ItemComponent';

function ShoppingList({ shoppingList, clearList, resetList, purchasedItem }) {
  console.log('shoppingList prop:', shoppingList);

  return (
    <div className="shopping-list">
      <h2>Shopping List</h2>
      {/* Button Controls */}
      <div className="button-controls">
        <button className="list-button" value="resetButton" onClick={resetList}>
          Reset
        </button>
        <button className="list-button" value="clearButton" onClick={clearList}>
          Clear
        </button>
      </div>
      {/* List Items */}
      <div>
        {shoppingList.map((shoppingItem) => {
          {
            /* Pull this out if Item */
          }
          return (
            <ItemComponent
              key={shoppingItem.id}
              shoppingItem={shoppingItem}
              purchasedItem={purchasedItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingList;
