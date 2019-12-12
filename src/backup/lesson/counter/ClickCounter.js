import React from 'react';
import './css/bootstrap.min.css';
import './css/style.min.css';
import load from './img/loading.gif';


class ClickCounter extends React.Component {
    constructor(props) {
        super(props);
        this.onClickButton = this.onClickButton.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            count: 0,
            isToggleOn: true,
            shuabaobao: [],
            loading: true
        }
        fetch("http://192.168.10.185:8080/tswDataDictionarys?type=WATERSOURCE")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    shuabaobao: data,
                    loading: false
                });
            });
    }
    
    onClickButton() {
        this.setState({
            count: this.state.count + 1
        });
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    renderSbb(d) {
        return (
            <ul className="list-group">
                {d.map(m =>
                    <li key={m.id} className="list-group-item">
                        <p>{m.id}</p>
                        <h3>{m.dicVaule}</h3>
                        <p>{m.createTime}</p>
                    </li>
                )}
            </ul>
        );
    }
    render() {
        // const hanStyle = {
        //     margin: '30px'
        // }

       

        let contents = this.state.loading
            ? <p><img src={load} alt=""/></p>
            : this.renderSbb(this.state.shuabaobao);
       
        return (
            <div className="container">
                <div className="">
                    <button onClick={this.onClickButton} className="btn btn-primary">加</button> <button className="btn btn-primary" onClick={() => this.setState({ count: this.state.count - 1 })}>减</button>
                    <p className="app-han">count: {this.state.count}</p>

                    <br />
                    <button onClick={this.handleClick} className="btn btn-danger">
                        {this.state.isToggleOn ? 'ON' : 'OFF'}
                    </button>
                    <br />
                    <br />
           
                    {contents}
                    
                </div>
            </div>
        );
    }
}

export default ClickCounter;