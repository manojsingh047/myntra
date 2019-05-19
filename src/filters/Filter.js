import React from "react";
import "./Filter.css";
class Filter extends React.Component {
  render() {
    // console.log(this);

    const checkboxElements = this.props.filter.filterData.map(item => {
      return (
        <div key={item.value} className="filter-item">
          <input
            name={this.props.filter.filterType}
            type="checkbox"
            onChange={this.handleInputChange}
          />{item.value}
        </div>
      );
    });

    console.log(checkboxElements);
    return (
      <div>
        <h5>{this.props.filter.filterType}</h5>
        {checkboxElements}
      </div>
    );
  }
}

export default Filter;
