import React, { Component } from "react";
import SummaryStore from "../stores/SummaryStore";

export default class Summary extends Component {

    constructor(props) {
        super(props);
        this.onUpdate = this.onUpdate.bind(this);
        this.state = {
            sum: SummaryStore.getSummary()
        }
    }
    onUpdate() {
        this.setState({
            sum: SummaryStore.getSummary()
        })
    }
    render() {
        const { sum } = this.state;
        return (
            <div>Total Count：{sum}</div>
        );
    }
    //生命周期函数
    componentWillMount() {
        SummaryStore.removeChangeListener(this.onUpdate);
    }
    componentDidMount() {
        SummaryStore.addChangeListener(this.onUpdate);
    }
}