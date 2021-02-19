//Takes in shopping list to add buttons for delete and clear for items on the DOM
import './ShoppingList.css';
import ItemComponent from '../ItemComponent/ItemComponent';

function ShoppingList({
  shoppingList,
  clearList,
  resetList,
  purchasedItem,
  deleteItem,
}) {
  console.log('shoppingList prop:', shoppingList);

  return (
    <div className="shopping-list">
      <h2>Shopping List</h2>
      {/* Control buttons for all list items */}
      <div className="button-controls">
        <button className="list-button" value="resetButton" onClick={resetList}>
          Reset
        </button>
        <button className="list-button" value="clearButton" onClick={clearList}>
          Clear
        </button>
      </div>
      <div>
        {/* create each shopping list item */}
        {shoppingList.map((shoppingItem) => {
          return (
            <ItemComponent
              key={shoppingItem.id}
              shoppingItem={shoppingItem}
              purchasedItem={purchasedItem}
              deleteItem={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingList;
