// import React from 'react';
import { PropTypes, Component } from 'react';

class Provider extends Component {

    getChildContext() {
        return {
            store: this.props.store
        };
    }

    render() {
        return this.props.children;
    }
}
export default Provider;

Provider.childContextTypes = {
    store: PropTypes.object
};