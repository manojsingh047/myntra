import React, {Component} from 'react';
class HeaderOption extends Component{

    render(){
        return (<div>{this.props.category.name}</div>);
    }
}

export default HeaderOption;