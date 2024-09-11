import React from 'react';

type FilterType = 'all' | 'active' | 'completed';

interface TodoFilterProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const TodoFilter: React.FC<TodoFilterProps> = ({ filter, setFilter }) => {
  return (
    <div>
      {/* Filter buttons to switch between all, active, and completed todos */}
      <button onClick={() => setFilter('all')} disabled={filter === 'all'}>
        All
      </button>
      <button onClick={() => setFilter('active')} disabled={filter === 'active'}>
        Active
      </button>
      <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>
        Completed
      </button>
    </div>
  );
};

export default TodoFilter;
