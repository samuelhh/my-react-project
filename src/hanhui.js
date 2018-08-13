import React, { Component } from 'react';
import Remarkable from 'remarkable';
import './css/bootstrap.min.css';


class Hanhui extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            value: 'Hello, **world**!',
            isToggleOn: true,
            date: new Date(),
            lang: ["c#", "php", "java", "python"]
        };
    }


    handleChange(e) {
        this.setState({
            value: e.target.value
        });
    }

    getRawMarkup() {
        //详见：https://www.npmjs.com/package/remarkable
        const md = new Remarkable();
        // md.set({ html: true });
        return {
            __html: md.render(this.state.value)
        };
    }
    //计时器
    tick() {
        this.setState({
            date: new Date()
        });
    }

    //handle
    handleClick(e) {
        //阻止a的默认行为
        // e.preventDefault();
        // console.log("The link was clicked");
        console.log("this指向：", this);

        this.setState((prevState) => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    //获取数据列表
    getLangList(data) {
        return (
            <ul>
                {data.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
        );
    }
    render() {
        return (
            <div className="container">
                <h3>Input</h3>
                <label htmlFor="markdown-content">Enter some markdown</label>
                <br />
                <textarea
                    rows="5"
                    className="form-control"
                    id="markdown-content"
                    onChange={this.handleChange}
                    defaultValue={this.state.value}
                />
                <br />
                <h3>Output</h3>
                <div className="content" dangerouslySetInnerHTML={this.getRawMarkup()} />
                {this.state.date.toLocaleString()}
                <p>
                    <button className="btn btn-danger" onClick={this.handleClick}>
                        {this.state.isToggleOn ? "on" : "off"}
                    </button>
                </p>
                {this.getLangList(this.state.lang)}
            </div>
        );

    }
    //生命周期函数
    componentDidMount() {
        //setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式
        this.timeId = setInterval(() => this.tick(), 1000);
    }

    componentWillMount() {
        //使用 clearInterval() 来停止执行
        clearInterval(this.timeId);
    }
}
export default Hanhui;

