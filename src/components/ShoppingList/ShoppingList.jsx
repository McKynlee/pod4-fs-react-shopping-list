import './ShoppingList.css';

function ShoppingList({ shoppingList, clearList }) {
  console.log('shoppingList prop:', shoppingList);

  return (
    <div className="shopping-list">
      <h2>Shopping List</h2>
      {/* Button Controls */}
      <div className="button-controls">
        <button
          className="list-button"
          value="resetButton"
          onClick={() => {
            console.log('Reset Button Clicked');
          }}
        >
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
            <div key={shoppingItem.id} className="list-item">
              <p>{shoppingItem.name}</p>
              <p>
                {shoppingItem.quantity} {shoppingItem.unit}
              </p>
              <div className="item-buttons">
                <button className="item-button">Buy</button>
                <button className="item-button">Remove</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShoppingList;
