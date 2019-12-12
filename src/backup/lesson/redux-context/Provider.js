/*
 * @Author: Heihuzi
 * @Date: 2019-12-12 10:06:05
 * @LastEditTime: 2019-12-12 10:15:28
 * @FilePath: \my-react-project\src\lesson\redux-context\Provider.js
 */
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
    // store: PropTypes.object
};