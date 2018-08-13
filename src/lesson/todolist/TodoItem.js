import React from 'react';

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.handelDelete = this.handelDelete.bind(this);
    }

    handelDelete() {
        //子组件向父组件通信，子组件要调用父组件传递过来的方法
        // this.props.deletes(this.props.index);
        //es6解构赋值
        const { index, deletes } = this.props;
        deletes(index);

    }


    render() {
        //es6解构赋值
        const { content } = this.props;
        return (
            <React.Fragment>
                <div className="list-group-item d-flex justify-content-between align-items-center">
                    {content}
                    <span className="badge badge-primary badge-pill" onClick={this.handelDelete}>删除</span>
                </div>
            </React.Fragment>
        );
    }
}

export default TodoItem;