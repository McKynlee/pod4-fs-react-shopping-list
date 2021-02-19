import './ItemComponent.css';

// Return jsx for individual items to be rendered,
// As well as correct buttons based on isPurchased status
// Sent to ShoppingList.jsx
function ItemComponent({ shoppingItem, purchasedItem, deleteItem }) {
  return (
    <div className="list-item">
      <p>{shoppingItem.name}</p>
      <p>
        {shoppingItem.quantity} {shoppingItem.unit}
      </p>
      {shoppingItem.isPurchased ? (
        <div>
          <p>
            <strong>Purchased</strong>
          </p>
        </div>
      ) : (
        <div className="item-buttons">
          <button
            className="item-button"
            onClick={() => purchasedItem(shoppingItem.id)}
          >
            Buy
          </button>
          <button
            className="item-button"
            onClick={() => deleteItem(shoppingItem.id)}
          >
            Remove
          </button>
        </div>
      )}
    </div>
  );
} //end ItemComponent

export default ItemComponent;
