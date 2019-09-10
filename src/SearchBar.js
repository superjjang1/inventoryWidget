import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(){
        super();
        this.state = {}
    }
    render(){
    return(
        <div className='search-bar blue'>
        <input
        type="text" placeholder="search"/>
        <div>
            <input id='in-stock' type='checkbox'/>
            only show stock
        </div>
     
        
        </div>
    )
}
}





export default SearchBar;