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
      filters: [],
      allShoppingItems: []
    };

    this.filterData = this.filterData.bind(this);
  }

  setShoppingItem(shoppingItemMeta) {
    ShoppingObj.getShoppingItems(shoppingItemMeta).then(shoppingItems => {
      this.setState({
        shoppingItems: shoppingItems,
        allShoppingItems: shoppingItems
      });
    });
  }

  setFilters(shoppingItemMeta) {
    const filters = ShoppingObj.getItemFilters(shoppingItemMeta);
    this.setState({ filters: filters });
  }

  componentDidMount() {
    this.setShoppingItem(ShoppingObj.SHOPPING_ITEM_META);
    this.setFilters(ShoppingObj.SHOPPING_ITEM_META);
  }

  getAllDataBy;

  filterData(event) {
    const filterType = event.target.name;
    const filterElementValue = event.target.value;
    const filteredFilters = this.state.filters.map(filter => {
      if (filter.filterType === filterType) {
        filter.filterData = filter.filterData.map(item => {
          if (item.value === filterElementValue) {
            item.isSelected = !item.isSelected;
          }
          return item;
        });
      }
      return filter;
    });

    let filter1 = this.state.allShoppingItems.filter(item => {
      const categoryState = filteredFilters
        .find(filter => filter.filterType === "CATEGORIES")
        .filterData.find(filterItem => filterItem.value === item.meta.category)
        .isSelected;
      return categoryState;
    });

    if (filter1.length === 0) {
      filter1 = [...this.state.allShoppingItems];
    }

    let filter2 = filter1.filter(item => {
      const brandState = filteredFilters
        .find(filter => filter.filterType === "BRANDS")
        .filterData.find(filterItem => filterItem.value === item.meta.brand)
        .isSelected;
      return brandState;
    });

    if (filter2.length === 0) {
      filter2 = [...filter1];
    }

    let filter3 = filter2.filter(item => {
      const colorState = filteredFilters
        .find(filter => filter.filterType === "COLORS")
        .filterData.find(filterItem => filterItem.value === item.meta.color)
        .isSelected;
      return colorState;
    });
    if (filter3.length === 0) {
      filter3 = [...filter2];
    }

    let filter4 = filter3.filter(item => {
      const discountState = filteredFilters
        .find(filter => filter.filterType === "DISCOUNT_TYPE")
        .filterData.find(filterItem => filterItem.value === item.discount.type)
        .isSelected;
      return discountState;
    });

    if (filter4.length === 0) {
      filter4 = [...filter3];
    }

    this.setState({
      shoppingItems: filter4,
      filters: filteredFilters
    });
  }

  render() {
    const shoppingItems = this.state.shoppingItems.map(item => {
      return <ShoppingItem key={item.id} item={item} />;
    });

    const filterElements = this.state.filters.map(filter => {
      return (
        <div className="filters" key={filter.filterType}>
          <Filter filter={filter} onFilterData={this.filterData} />
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
