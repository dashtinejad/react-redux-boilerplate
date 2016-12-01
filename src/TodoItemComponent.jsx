import React from 'react';

export default class TodoItemComponent extends React.Component {
    static propTypes = {
        todo: React.PropTypes.object.isRequired,
        onSelectTodo: React.PropTypes.func.isRequired,
    };

    render() {
        return (
            <div style={{borderBottom: '1px solid gray', padding: '10px'}}>
                <small>Todo #{this.props.todo.id}</small>
                
                <div>
                    {this.props.todo.title}
                    &nbsp; <button onClick={() => this.props.onSelectTodo(this.props.todo.id)}>Detail</button>
                </div>
            </div>
        );
    }
}