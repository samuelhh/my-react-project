import React from 'react';
import Counter from './Counter';

export default class ControlPanel extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Counter caption="Frist" />
                <Counter caption="Second" />
                <Counter caption="Thrid" />
            </React.Fragment>
        );
    }
}