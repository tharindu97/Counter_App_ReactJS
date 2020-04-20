import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count: 0
     };
    render() {
        let classes = this.getBadgeClasses();
        return ( 
            <div>
                <h1><span className={classes}>{this.formatCount()}</span></h1>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
         );
    }

    getBadgeClasses() {
        let classes = 'badge badge-';
        classes += this.state.count === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;

//50min
