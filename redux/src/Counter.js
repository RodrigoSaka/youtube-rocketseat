import React from 'react';
import { connect } from 'react-redux';

const Counter = props => <h2>Você tem {props.todos.length} todos</h2>;

const mapsStateToProps = state => ({
  todos: state.todos,
});

export default connect(mapsStateToProps)(Counter);
