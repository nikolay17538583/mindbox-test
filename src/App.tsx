import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import useTodos from './hooks/useTodos';
import './styles/globals.css';

const App: React.FC = () => {
  const { todos, addTodo, toggleTodo, deleteCompleted, filter, changeFilter } =
    useTodos();

  return (
    <div>
      <h1>todos</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <Footer
        itemsLeft={todos.filter((todo) => !todo.completed).length}
        filter={filter}
        changeFilter={changeFilter}
        clearCompleted={deleteCompleted}
      />
    </div>
  );
};

export default App;
