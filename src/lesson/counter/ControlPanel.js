import React, { Component } from 'react';
import Counter from './Counter';

class ControlPaner extends Component {
    constructor(props) {
        super(props);
        this.onCountUpdate = this.onCountUpdate.bind(this);
        this.initValue = [5, 10, 20];
        //reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值
        //array.reduce(function(total, currentValue, currentIndex, arr), initialValue),initialValue是传递给函数的初始值
        //https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
        const initSum = this.initValue.reduce((a, b) => a + b, 0);

        this.state = {
            sum: initSum
        };
    }

    onCountUpdate(newValue, prevValue) {
        const valueChange = newValue - prevValue;
        this.setState({
            sum: this.state.sum + valueChange
        });
    }
    render() {
        return (
            <React.Fragment>
                <Counter onUpdate={this.onCountUpdate} caption="First" initValue={this.initValue[0]} />
                <Counter onUpdate={this.onCountUpdate} caption="Second" initValue={this.initValue[1]} />
                <Counter onUpdate={this.onCountUpdate} caption="Third" initValue={this.initValue[2]} />
                <p>{this.state.sum}</p>
                <br />
                <button onClick={() => this.forceUpdate()}>click me repaint</button>
            </React.Fragment>
        );
    }

}

export default ControlPaner;