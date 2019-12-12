import React, { Component } from 'react';
import '../../css/bootstrap.min.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.onClickIncrement = this.onClickIncrement.bind(this);
        this.onClickDecrement = this.onClickDecrement.bind(this);
        this.state = {
            count: props.initValue || 0
        };
        console.log("constructor-" + props.caption);
    }
    //加
    onClickIncrement() {
        this.updateCount(true);
    }
    //减
    onClickDecrement() {
        this.updateCount(false);
    }
    //数据加减函数
    updateCount(isIncrement) {
        const prevValue = this.state.count;
        const newValue = isIncrement ? prevValue + 1 : prevValue - 1;
        this.setState({
            count: newValue
        })
        this.props.onUpdate(newValue, prevValue)
    }

    render() {
        console.log("render-" + this.props.caption);
        //es6解构赋值
        const { caption } = this.props;
        return (
            <div className="list-group-item">
                <div className="btn-group">
                    <button className="btn btn-secondary" onClick={this.onClickIncrement}>+</button>
                    <button className="btn btn-secondary" onClick={this.onClickDecrement}>-</button>
                </div>
                <span className="">{caption} count: {this.state.count}</span>
            </div>
        );

    }

    //生命周期函数
    componentWillMount() {
        console.log("willMount-" + this.props.caption);
    }
    componentDidMount() {
        console.log("didMount-" + this.props.caption);
    }
    componentWillReceiveProps(nextProps) {
        console.log("WillReceiveProps+" + this.props.caption);
    }
    //shouldComponentUpdate函数需要返回值(默认值：true)
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption || nextState.count !== this.state.count);
    }
}

export default Counter;