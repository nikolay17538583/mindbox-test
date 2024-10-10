import TodoItem from './TodoItem';
import { TodoListProps } from '../types';
import '../styles/list.css';

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => (
  <ul className="todo-list">
    {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
    ))}
  </ul>
);

export default TodoList;
