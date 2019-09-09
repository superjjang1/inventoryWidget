import React from 'react';
import Goods from './Goods'

function ChecklistItems(props){
    return (
        <div class>
            <div>
                Search Bar
            </div>
            <div className>
                <span className='col s6'>Name</span>
                <span className='col s6'>Price</span>
                <br/>
                <Goods/>
                <Goods/>
            </div>
        </div>
    )
}

export default ChecklistItems;