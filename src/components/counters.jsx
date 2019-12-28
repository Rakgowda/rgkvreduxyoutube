import React, { Component } from 'react';

import Counter from "./counter"

class Counters extends Component {
    
    render() { 
        console.log(this.props.counterr);
        return ( 
<br>
    <br>
        
        <div>
            
            {this.props.counterr.map(e=><Counter key={e.id} counter={e}>
           
            </Counter>)}

        </div> );
    }
}
 
export default Counters;
