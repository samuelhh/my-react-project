import React from 'react';
import store from '../Store';
import * as Actions from '../Actions';

class Counter extends React.Component {
    render() {
        const { caption, onIncrement, onDecrement, vules } = this.props;
        return (
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <span>{caption} count: {vules}</span>
            </div>
        );
    }
}

class CounterContainer extends React.Component {
    constructor(props) {
        super(props);

        this.getOwnState = this.getOwnState.bind(this);
        this.onChange = this.onChange.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);

        this.state = this.getOwnState();
    }

    getOwnState() {
        return {
            value: store.getSate()[this.props.caption]
        };
    }
    onChange() {
        this.setState(this.getOwnState());
    }
    onIncrement() {
        store.dispatch(Actions.increment(this.props.caption));
    }
    onDecrement() {
        store.dispatch(Actions.decrement(this.props.caption));
    }

    render() {
        return (
            <Counter
                caption={this.props.caption}
                onIncrement={this.onIncrement}
                onDecrement={this.onDecrement}
                value={this.state.value}
            />
        );
    }

    //生命周期函数
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.value !== this.state.value);
    }
    componentDidMount() {
        store.subcribe(this.onChange);
    }
    componentWillUnmount() {
        store.unsubcribe(this.onChange);
    }

}

export default CounterContainer;