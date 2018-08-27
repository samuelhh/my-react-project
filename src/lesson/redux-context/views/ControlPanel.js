import React from 'react';
import Counter from './Counter';

class ControlPanel extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Counter caption="Frist"></Counter>
                <Counter caption="Second"></Counter>
                <Counter caption="Third"></Counter>
            </React.Fragment>
        );
    }
}
export default ControlPanel;