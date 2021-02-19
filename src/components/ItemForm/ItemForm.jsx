// Takes user input and passes into App.jsx to create a new
// shopping list item
// Returns jsx to be rendered to the DOM
function ItemForm({
  newItemName,
  newQuantity,
  newUnit,
  setNewItemName,
  setNewQuantity,
  setNewUnit,
  handleSubmit,
}) {
  return (
    <div>
      <h2>Add an Item</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Item:
          <input
            type="text"
            value={newItemName}
            onChange={(evt) => setNewItemName(evt.target.value)}
            required
          ></input>
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={newQuantity}
            onChange={(evt) => setNewQuantity(evt.target.value)}
            required
          ></input>
        </label>
        <label>
          Unit:
          <input
            type="text"
            value={newUnit}
            onChange={(evt) => setNewUnit(evt.target.value)}
          ></input>
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ItemForm;
