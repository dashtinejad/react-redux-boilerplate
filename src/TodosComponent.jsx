import React from 'react';

import TodoItemComponent from './TodoItemComponent';

export default class TodosComponent extends React.Component {
    static propTypes = {
        todos: React.PropTypes.array.isRequired,
        onSelectTodo: React.PropTypes.func.isRequired,
    };

    render() {
        let todos = this.props.todos.map(todo => (
            <div key={todo.id}>
                <TodoItemComponent
                    todo={todo}
                    onSelectTodo={this.props.onSelectTodo}
                />
            </div>
        ));

        return (
            <div>
                <h1>Todos</h1>
                {todos}
            </div>
        );
    }
}