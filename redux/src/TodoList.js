import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as todoActions from './actions/todos';

function TodoList(props) {
  console.log(props);
  const [newTodoText, setNewTodoText] = useState('');

  const addNewTodo = () => {
    props.addTodo(newTodoText);
    setNewTodoText('');
  };

  const list = () => {
    return props.todos.map(todo => {
      return <li key={todo.id}>{todo.text}</li>;
    });
  };

  return (
    <div>
      <ul>{list()}</ul>
      <input type='text' value={newTodoText} onChange={e => setNewTodoText(e.target.value)} />
      <button onClick={addNewTodo}>Novo todo</button>
    </div>
  );
}

const mapStateToProps = state => ({
  todos: state.todos,
});
const mapDispatchToProps = dispatch => bindActionCreators(todoActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
