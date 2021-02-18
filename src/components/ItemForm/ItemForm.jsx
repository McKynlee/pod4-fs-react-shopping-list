function ItemForm() {
  return (
    <div>
      <h2>Add an Item</h2>
      <form>
        <label>
          Item:<input type="text"></input>
        </label>
        <label>
          Quantity:<input type="number"></input>
        </label>
        <label>
          Unit:<input type="text"></input>
        </label>
        <button>Save</button>
      </form>
    </div>
  );
}

export default ItemForm;
