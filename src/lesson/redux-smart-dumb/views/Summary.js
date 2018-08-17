import React from 'react';
import store from '../Store';

//傻瓜组件正常写法
// class Summary extends React.Component {
//     render() {
//         return (
//             <div>Total count：{this.props.sum}</div>
//         );
//     }
// }
//简写的傻瓜组件
function Summary(props) {
    return (
        <div>Total count：{props.sum}</div>
    );
}

class SummaryContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.getOwnState();
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState(this.getOwnState());
    }

    getOwnState() {
        const state = store.getState();
        let sum = 0;
        for (const key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key];
            }
        }
        return { sum: sum }
    }

    render() {
        return (
            <Summary sum={this.state.sum} />
        );
    }

    //生命周期函数
    shouldComponentUpdate(nextProps, nextState) {
        return nextState.sum !== this.state.num;
    }
    componentDidMount() {
        store.subscribe(this.onChange);
    }
    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }
}

export default SummaryContainer;