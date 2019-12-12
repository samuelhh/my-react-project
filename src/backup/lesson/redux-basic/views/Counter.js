import React from 'react';
import store from '../Store';
import * as Actions from '../Actions';


export default class Counter extends React.Component {
    constructor(props) {
        super(props);

        //bind this
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.onChange = this.onChange.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }

    //获得状态
    getOwnState() {
        return {
            value: store.getState()[this.props.caption]
        }
    }

    onIncrement() {
        store.dispatch(Actions.increment(this.props.caption));
    }

    onDecrement() {
        store.dispatch(Actions.decrement(this.props.caption));
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    //render函数
    render() {
        const value = this.state.value;
        const { caption } = this.props;
        return (
            <div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        );
    }

    //生命周期函数
    //更新
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.value !== this.state.value);
    }
    //装载
    componentDidMount() {
        store.subscribe(this.onChange);
    }
    //卸载
    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }
}