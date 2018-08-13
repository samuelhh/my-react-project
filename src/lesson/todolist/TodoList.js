import React from 'react';
import "../../css/bootstrap.min.css";
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handelItemDelete = this.handelItemDelete.bind(this);
        this.state = {
            list: [],
            inputValue: ''
        }
    }
    
    //按钮点击事件
    //...ES6展开运算符
    handleBtnClick() {
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            inputValue: ''
        });
    }
    //input输入
    handleInputChange(e) {
        this.setState({
            inputValue: e.target.value
        });
    }
    //删除
    handelItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list
        });
        // console.log(index);
    }

    //1、父组件通过属性的形式向子组件传递参数；
    //2、子组件通过props接收父组件传递过来的参数；

    getTodoListItem() {
        return (
            <div className="list-group">
                {this.state.list.map((item, index) =>
                    <TodoItem
                        content={item}
                        key={index}
                        index={index}
                        deletes={this.handelItemDelete}
                    />
                )}
            </div>
        );
    }
    render() {
        return (
            <div className="container">
                <br />
                <div className="form-inline">
                    <input className="form-control" onChange={this.handleInputChange} value={this.state.inputValue} style={{ marginRight: "10px" }} />
                    <button className="btn btn-primary" onClick={this.handleBtnClick}>添加</button>
                </div>
                <br />
                {this.getTodoListItem()}
            </div>
        );
    }
}
export default TodoList;