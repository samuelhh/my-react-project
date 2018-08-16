import React from 'react';
import Counter from './Counter';
import Summary from './Summary';

export default class ControlPanel extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Counter caption="Frist" />
                <Counter caption="Second" />
                <Counter caption="Third" />
                <Summary />
            </React.Fragment>
        );
    }
}