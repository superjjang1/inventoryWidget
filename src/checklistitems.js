import React from 'react';
import Goods from './Goods'

function ChecklistItems(props){
    return (
        <div class>
            <div>
            </div>
            <div className='container'>
                <div className='card green'>
                    <div className='row'>
                <div className='col s6 m6'>Name</div>
                <div className='col s6 m6'>Price</div>
                    </div>
                </div>
                <Goods/>
            </div>
        </div>
    )
}

export default ChecklistItems;