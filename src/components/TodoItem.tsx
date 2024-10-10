import { TodoItemProps } from '../types';
import '../styles/item.css';

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="todo-checkbox"
      />
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </span>
    </li>
  );
};

export default TodoItem;
