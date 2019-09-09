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
                <div className='card blue'>
                   <div className='row'>
                       <div className='list-box col s6'>
                           <h4 className='count center'>

                           </h4>
                           <input className='center'
                           type="text"
                           placeholder="search"
                           />

                       </div>
                   </div>
                </div>
                <div className="card orange">
                <div className='row'>
                    <div className='col s12 '>
                    <ChecklistItems />
                    </div>
                </div>
                </div>
            </div>
        )
    }
}
export default Checklist;