import React from 'react';
import * as Actions from '../Actions';


//傻瓜组件的正常写法
class Counter extends React.Component {
    render() {
        const { caption, onIncrement, onDecrement, value } = this.props;
        return (
            <div>
                <button onClick={onIncrement}>+</button>
                <button onClick={onDecrement}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        );
    }
}


//傻瓜组件简写
// function Counter({ caption, onIncrement, onDecrement, value }) {
//     return (
//         <div>
//             <button onClick={onIncrement}>+</button>
//             <button onClick={onDecrement}>-</button>
//             <span>{caption} count: {value}</span>
//         </div>
//     );
// }

class CounterContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onChange = this.onChange.bind(this);
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.getOwnState = this.getOwnState.bind(this);

        this.state = this.getOwnState();
    }

    getOwnState() {
        return {
            value: this.context.store.getState()[this.props.caption]
        };
    }

    onIncrement() {
        this.context.store.dispatch(Actions.increment(this.props.caption));
    }
    onDecrement() {
        this.context.store.dispatch(Actions.decrement(this.props.caption));
    }
    onChange() {
        this.setState(this.getOwnState());
    }


    render() {
        return <Counter
            caption={this.props.caption}
            onIncrement={this.onIncrement}
            onDecrement={this.onDecrement}
            value={this.state.value}>
        </Counter>
    }

    //生命周期函数
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.value !== this.state.value);
    }
    componentDidMount() {
        this.context.store.subscribe(this.onChange);
    }
    componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange);
    }
}

export default CounterContainer;