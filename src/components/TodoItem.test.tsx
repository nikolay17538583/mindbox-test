import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('TodoItem Component', () => {
  test('checkbox toggles task completed state', () => {
    const toggleComplete = jest.fn();
    const todo = { id: 1, text: 'Test Task', completed: false };

    render(<TodoItem todo={todo} toggleTodo={toggleComplete} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(toggleComplete).toHaveBeenCalledWith(1);
  });
});
