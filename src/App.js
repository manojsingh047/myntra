import React, { Component } from "react";
import Header from "./header/Header";
import getShoppingItems from "./assets/data/shoppingItems";
import "./App.css";
import ShoppingItem from "./shoppingItem/ShoppingItem";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shoppingItems: []
    };
  }

  componentDidMount() {
    getShoppingItems().then(shoppingItems => {
      this.setState({
        shoppingItems: shoppingItems
      });
    });
  }

  render() {
    const shoppingItems = this.state.shoppingItems.map(item => {
      return <ShoppingItem key={item.id} item={item} />;
    });

    return (
      <div className="App">
        <div className="app-header-box">
          <Header />
        </div>
        <div className="app-shopping-items">{shoppingItems}</div>
      </div>
    );
  }
}

export default App;
