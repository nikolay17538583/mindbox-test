export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
}

export interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

export interface TodoInputProps {
  addTodo: (text: string) => void;
}

export interface FooterProps {
  itemsLeft: number;
  filter: string;
  changeFilter: (filter: string) => void;
  clearCompleted: () => void;
}
