import { render, screen } from '@testing-library/react';
import TodoList from './TodoList';

describe('TodoList Component', () => {
  const todos = [
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
  ];

  test('renders the correct number of tasks', () => {
    render(<TodoList todos={todos} toggleTodo={jest.fn()} />);

    const taskItems = screen.getAllByRole('listitem');
    expect(taskItems).toHaveLength(2);
  });
});
