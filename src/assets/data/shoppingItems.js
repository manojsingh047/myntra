/**
 * This method is creating dummy shopping items data.
 */

async function getShoppingItems() {
  let items = [];
  const itemCount = 20;
  for (let i = 0; i < itemCount; i++) {
    const item = {
      id: `item${i + 1}`,
      title: `Item ${i + 1}`,
      detailedTitle: `this is an item ${i + 1}`,
      price: 1000 * (i + 1),
      discount: {
        type: i % 2 === 0 ? "percent" : "currency",
        value: 10 * (i + 1)
      }
    };
    items.push(item);
  }
  return items;
}

export default getShoppingItems;
