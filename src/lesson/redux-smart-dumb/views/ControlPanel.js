import React from 'react';
import Counter from './Counter';
import Summary from './Summary';

export default class ControlPanel extends React.Component {
    render() {
        return (
            <div>
                <Counter caption="First" />
                <Counter caption="Second" />
                <Counter caption="Third" />
                <Summary />
            </div>
        );
    }
}