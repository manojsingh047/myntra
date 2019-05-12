import React, { Component } from "react";
import Logo from "../logo/Logo";
import HeaderCategory from "../header-category/HeaderCategory";
import HeaderOption from "../header-option/HeaderOption";
import SearchBox from "../search-box/SearchBox";
import "./Header.css";
import headerCat from "../assets/data/headercat.json";
import headerOptions from "../assets/data/headerOption.json";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerCategories: [],
      headerOptions: []
    };
  }

  componentDidMount() {
    this.setState({
      headerCategories: headerCat,
      headerOptions: headerOptions
    });
  }

  getHeaderItems(data, Component) {
    return data.map(element => {
      return <Component key={element.id} category={element} />;
    });
  }

  render() {
    const headerCategories = this.getHeaderItems(this.state.headerCategories, HeaderCategory);
    const headerOptions = this.getHeaderItems(this.state.headerOptions, HeaderOption);
    
    return (
      <header>
        <div className="header-box">
          <div className="header-item" id="header-item-logo">
            <Logo />
          </div>
          <div className="header-item" id="header-item-cat">
            {headerCategories}
          </div>
          <div className="header-item" id="header-item-search">
            <SearchBox />
          </div>
          <div className="header-item" id="header-item-option">
            {headerOptions}
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
