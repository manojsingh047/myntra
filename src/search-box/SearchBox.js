import React, {Component} from 'react';
import './SearchBox.css';

class SearchBox extends Component{

    render(){
        return (<div className="header-search-box">
            <a className="header-search-icon">
                <span className="sprite sprites-search"></span>   
            </a>     
            <input className="header-search" placeholder="Search for products, brands and more"/>
        </div>);
    }
}

export default SearchBox;