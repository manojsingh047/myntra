const SHOPPING_ITEM_META = {
  CATEGORIES : ["tshirts", "jeans", "trousers", "shirts"],
  BRANDS : ["calvin", "tommy", "levis", "nike"],
  COLORS : ["red", "green", "orange", "blue"],
  DISCOUNT_TYPE : ["percent", "currency"]
} 


function getItemFilters(shoppingItemMeta) {
  let filters = [];
  Object.keys(shoppingItemMeta).forEach(filterItems => {
    let filterData = shoppingItemMeta[filterItems].map(item => {
      return {
        isSelected : false,
        value:item
      }
    });

    filters.push({
      filterType : filterItems,
      filterData : filterData
    });
  });

  return filters;

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * This method is creating dummy shopping items data.
 */
async function getShoppingItems(shoppingItemMeta) {
  // console.log(shoppingItemMeta);
  let items = [];
  const itemCount = 20;
  for (let i = 0; i < itemCount; i++) {
    const item = {
      id: `item${i + 1}`,
      title: `Item ${i + 1}`,
      detailedTitle: `this is an item ${i + 1}`,
      price: 1000 * (i + 1),
      discount: {
        type: shoppingItemMeta.DISCOUNT_TYPE[getRandomInt(0, shoppingItemMeta.DISCOUNT_TYPE.length - 1)],
        value: 10 * (i + 1)
      },
      meta: {
        category: shoppingItemMeta.CATEGORIES[getRandomInt(0, shoppingItemMeta.CATEGORIES.length - 1)],
        color: shoppingItemMeta.COLORS[getRandomInt(0, shoppingItemMeta.COLORS.length - 1)],
        brand: shoppingItemMeta.BRANDS[getRandomInt(0, shoppingItemMeta.BRANDS.length - 1)]
      }
    };
    items.push(item);
  }
  return items;
}

export default { getShoppingItems, getItemFilters, SHOPPING_ITEM_META};
