function ItemForm({
  newItemName,
  newItemQty,
  newItemUnit,
  setNewItemName,
  setNewItemQty,
  setNewItemUnit,
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
          ></input>
        </label>
        <label>
          Quantity:
          <input
            type="number"
            value={newItemQty}
            onChange={(evt) => setNewItemQty(evt.target.value)}
          ></input>
        </label>
        <label>
          Unit:
          <input
            type="text"
            value={newItemUnit}
            onChange={(evt) => setNewItemUnit(evt.target.value)}
          ></input>
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default ItemForm;
