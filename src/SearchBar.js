import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(){
        super();
        this.state = {
            search: ""
        }
        this.changeSearch = this.changeSearch.bind(this);
    }
    changeSearch(event){
        // console.log(event.target);
        const newVal = event.target.value;
        console.log(newVal);
        // this.setState({
        //     search: newVal
        // })
        this.props.changeFromParent(newVal);
    }
    render(){
    return(
        <div className='search-bar blue'>
        <input
        type="text" placeholder="search"
        value={this.props.search}
        onChange={this.changeSearch} />
        <div>
            <input id='in-stock' type='checkbox'/>
            only show stock
        </div>
     
        
        </div>
    )
}
}





export default SearchBar;