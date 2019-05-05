import React, { Component } from "react";
import './HeaderCategory.css';

class HeaderCategory extends Component {
  render() {
    return (<div className="header-category">{this.props.category.name}</div>);
  }
}

export default HeaderCategory;
