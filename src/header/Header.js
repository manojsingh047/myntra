import React, { Component } from "react";
import Logo from "../logo/Logo";
import HeaderCategory from "../header-category/HeaderCategory";
import HeaderOption from "../header-option/HeaderOption";
import SearchBox from "../search-box/SearchBox";
import "./Header.css";
import headerCat from "../assets/data/headercat.json";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerCategories: headerCat
    };
  }

  componentDidMount() {
    this.setState({
      headerCategories: headerCat
    });
  }

  render() {
    const headerCategories = this.state.headerCategories.map(element => {
      console.log(element);
      return <HeaderCategory key={element.id} category={element} />;
    });

    return (
      <header >
        <div className="header-box">
          <div className="header-item" id="header-item-logo">
            <Logo />
          </div>
          <div className="header-item" id="header-item-cat">{headerCategories}</div>
          <div className="header-item" id="header-item-search">
            <SearchBox />
          </div>
          <div className="header-item" id="header-item-option">
            <HeaderOption />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
