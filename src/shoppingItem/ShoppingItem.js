import React from "react";
import "./ShoppingItem.css";
class ShoppingItem extends React.Component {
  render() {
    return <div className="shopping-item">
    {this.props.item.title}<br/>
    {this.props.item.detailedTitle}<br/>
    {this.props.item.price}<br/>
    {this.props.item.discount.value} {this.props.item.discount.type}<br/>
    <br/>
    <strong>{this.props.item.meta.category}</strong><br/>
    <strong>{this.props.item.meta.brand}</strong><br/>
    <strong><span style={{color:this.props.item.meta.color}}>{this.props.item.meta.color}</span></strong><br/>
    </div>;
  }
}

export default ShoppingItem;
