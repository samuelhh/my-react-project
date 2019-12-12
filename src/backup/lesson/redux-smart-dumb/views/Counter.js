import React from 'react';
import store from '../Store';
import * as Actions from '../Actions';

//正常傻瓜组件写法
// class Counter extends React.Component {
//     render() {
//         const { caption, onIncrement, onDecrement, value } = this.props;
//         return (
//             <div>
//                 <button onClick={onIncrement}>+</button>
//                 <button onClick={onDecrement}>-</button>
//                 <span>{caption} count: {value}</span>
//             </div>
//         );
//     }
// }

//傻瓜组件简写
function Counter({ caption, onIncrement, onDecrement, value }) {
    return (
        <div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <span>{caption} count: {value}</span>
        </div>
    );
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
            value: store.getState()[this.props.caption]
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
        store.subscribe(this.onChange);
    }
    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

}

export default CounterContainer;