import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        value: this.props.value
     };

    handleIncrement = () =>{
        this.setState({ count: this.state.value + 1 })
    };
    render() {
        return ( 
            <div>
                <h1><span className={this.getBadgeClasses()}>{this.formatCount()}</span></h1>
                <button onClick={this.handleIncrement } className="btn btn-secondary btn-sm">Increment</button>
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

