import React, { useState } from 'react';
import TodoItem from './TodoItem';
import TodoFilter from './TodoFilter';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  // Add a new todo to the list
  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  // Toggle the completed status of a todo
  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Clear all completed todos
  const handleClearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed));
  };

  // Filter todos based on the selected filter (all, active, completed)
  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div>
      <h1>Todo List</h1>

      {/* Input for adding new todos */}
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a task"
      />
      <button onClick={handleAddTodo}>Add</button>

      {/* Todo filter */}
      <TodoFilter filter={filter} setFilter={setFilter} />

      {/* Todo list */}
      <ul>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onToggle={handleToggleTodo} />
        ))}
      </ul>

      {/* Remaining tasks counter */}
      <div>{todos.filter(todo => !todo.completed).length} tasks remaining</div>

      {/* Button to clear completed todos */}
      <button onClick={handleClearCompleted}>Clear Completed</button>
    </div>
  );
};

export default TodoList;
