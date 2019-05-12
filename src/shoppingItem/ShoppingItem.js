import React from "react";
import "./ShoppingItem.css";
class ShoppingItem extends React.Component {
  render() {
    return <div className="shopping-item">
    {this.props.item.title}<br/>
    {this.props.item.detailedTitle}<br/>
    {this.props.item.price}<br/>
    {this.props.item.discount.value}<br/>
    
    
    </div>;
  }
}

export default ShoppingItem;
