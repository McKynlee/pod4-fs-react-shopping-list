import './ShoppingList.css';

function ShoppingList() {
  return (
    <div className="shopping-list">
      <h2>Shopping List</h2>
      {/* Button Controls */}
      <div className="button-controls">
        <button className="item-button">Reset</button>
        <button className="item-button">Clear</button>
      </div>
      {/* List Items */}
      <div>
        <div className="list-item">
          <p>Apples</p>
          <p>5 lbs</p>
          <div className="item-buttons">
            <button>Buy</button>
            <button>Remove</button>
          </div>
        </div>

        <div className="list-item">
          <p>Chicken Breast</p>
          <p>20 lbs</p>
          <div className="item-buttons">
            <button>Buy</button>
            <button>Remove</button>
          </div>
        </div>

        <div className="list-item">
          <p>Orange Juice</p>
          <p>1 gallon</p>
          <div className="item-buttons">
            <button>Buy</button>
            <button>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShoppingList;
