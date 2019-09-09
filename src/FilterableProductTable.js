import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

class FiltereableProductTable extends Component{
    render(){
        return (
            <div className='col-sm-12'>
                <SearchBar />
                <ProductTable />
            </div>
        )
    }
}


export default FiltereableProductTable;
