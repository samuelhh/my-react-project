import React, { Component } from "react";
import * as Actions from "../Actions";
import CounterStore from "../stores/CounterStore";
import "../../../css/bootstrap.min.css";


export default class Counter extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        }
    }

    onClickIncrementButton() {
        Actions.increment(this.props.caption);
    }
    onClickDecrementButton() {
        Actions.decrement(this.props.caption);
    }

    render() {
        const { caption } = this.props;
        return (
            <div>
                <button onClick={this.onClickIncrementButton}>+</button>
                <button onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        );
    }

    onChange() {
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({
            count: newCount
        });
    }

    //生命周期函数
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count);
    }
    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
    }
    componentWillMount() {
        CounterStore.removeChangeListener(this.onChange);
    }


}