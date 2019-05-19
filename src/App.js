import React, { Component } from "react";
import Header from "./header/Header";
import ShoppingObj from "./assets/data/shoppingItems";
import "./App.css";
import ShoppingItem from "./shoppingItem/ShoppingItem";
import Filter from "./filters/Filter";

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

  setFilters(shoppingItemMeta) {
    const filters = ShoppingObj.getItemFilters(shoppingItemMeta);
    this.setState({ filters: filters });
  }

  componentDidMount() {
    console.log(ShoppingObj);
    this.setShoppingItem(ShoppingObj.SHOPPING_ITEM_META);
    this.setFilters(ShoppingObj.SHOPPING_ITEM_META);
  }

  render() {
    const shoppingItems = this.state.shoppingItems.map(item => {
      return <ShoppingItem key={item.id} item={item} />;
    });

    const filterElements = this.state.filters.map(filter => {
      return (
        <div className="filters">
          <Filter key={filter.filterType} filter={filter} />
        </div>
      );
    });

    return (
      <div className="App">
        <div className="app-header-box">
          <Header />
        </div>
        <div className="app-data-box">
          <div className="app-shopping-filters">
            <h3>Filters</h3>
            {filterElements}
          </div>
          <div className="app-shopping-items">{shoppingItems}</div>
        </div>
      </div>
    );
  }
}

export default App;
