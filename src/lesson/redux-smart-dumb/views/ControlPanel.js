import React from 'react';
import Counter from './Counter';

export default class ControlPanel extends React.Component {
    render() {
        return (
            <div>
                <Counter caption="Frist" />
            </div>
        );
    }
}