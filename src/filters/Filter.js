import React from "react";
import "./Filter.css";
class Filter extends React.Component {
  render() {
    // console.log(this.props);
    const checkboxElements = this.props.filter.filterData.map(item => {
      return (
        <div key={item.value} className="filter-item">
          <input
            name={this.props.filter.filterType}
            value={item.value}
            checked={item.isSelected}
            type="checkbox"
            onChange={this.props.onFilterData}
          />
          {item.value}
        </div>
      );
    });

    return (
      <div>
        <h5>{this.props.filter.filterType}</h5>
        {checkboxElements}
      </div>
    );
  }
}

export default Filter;
