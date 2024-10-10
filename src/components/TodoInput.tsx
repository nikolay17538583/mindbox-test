import { useState } from 'react';
import '../styles/input.css';
import { TodoInputProps } from '../types';

const TodoInput: React.FC<TodoInputProps> = ({ addTodo }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="todo-input-field"
        placeholder="What needs to be done?"
      />
    </form>
  );
};

export default TodoInput;
