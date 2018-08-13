import React, { Component } from 'react';
import Counter from "./Counter";
// import Summary from "./summary";

export default class ControlPanel extends Component {
    render() {
        return (
            <React.Fragment>
                <Counter caption="First" />
                <Counter caption="Second" />
                <Counter caption="Third" />
            </React.Fragment>
        );
    }
}