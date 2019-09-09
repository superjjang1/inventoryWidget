import React, {Component} from 'react';
import ChecklistItems from './checklistitems';

class Checklist extends Component {
    constructor (){
        console.log(constructor);
        super();
    }
    componentDidMount(){
        console.log('mounted');
    }
    render(){
        return(
            <div className='container'>
                <div className="card">
                <div className='row'>
                    <ChecklistItems />
                </div>
                </div>
            </div>
        )
    }
}
export default Checklist;