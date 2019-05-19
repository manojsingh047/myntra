import React, { Component } from "react";
import Header from "./header/Header";
import ShoppingObj from "./assets/data/shoppingItems";
import "./App.css";
import ShoppingItem from "./shoppingItem/ShoppingItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingItems: [],
      filters: []
    };
  }

  setShoppingItem(shoppingItemMeta) {
    ShoppingObj.getShoppingItems(shoppingItemMeta).then(shoppingItems => {
      this.setState({
        shoppingItems: shoppingItems
      });
    });
  }

  componentDidMount() {
    console.log(ShoppingObj);
    this.setShoppingItem(ShoppingObj.SHOPPING_ITEM_META);
  }

  render() {
    const filters = ShoppingObj.getItemFilters(ShoppingObj.SHOPPING_ITEM_META);

    const shoppingItems = this.state.shoppingItems.map(item => {
      return <ShoppingItem key={item.id} item={item} />;
    });

    return (
      <div className="App">
        <div className="app-header-box">
          <Header />
        </div>
        <div className="app-data-box">
          <div className="app-shopping-filters">Filters</div>
          <div className="app-shopping-items">{shoppingItems}</div>
        </div>
      </div>
    );
  }
}

export default App;
