import { useState, useEffect } from 'react';
import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import { nanoid } from 'nanoid';
import TodoList from '../components/TodoList/TodoList';
import EditForm from '../components/EditForm/EditForm';

const initialTodos = [
  { id: '1', text: 'Practice more' },
  { id: '2', text: 'Get all tasks done on time' },
];

const Todos = () => {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : initialTodos;
  });
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const findTodo = text =>
    todos.some(
      t =>
        t.text.trim().toLowerCase() === text.trim().toLowerCase() &&
        t.id !== currentTodo.id
    );

  const addNewTodo = inputValue => {
    if (findTodo(inputValue)) {
      alert('This todo already exists!');
      return;
    }
    setTodos(prev => [...prev, { text: inputValue, id: nanoid() }]);
  };

  const handleDelete = todoId => {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== todoId);
    });
  };

  const handleEditClick = todo => {
    setIsEditing(true);
    setCurrentTodo(todo);
  };

  const cancelUpdate = () => {
    setIsEditing(false);
    setCurrentTodo({});
  };

  const updateTodo = newText => {
    if (findTodo(newText)) {
      alert('This todo already exists!');
      return;
    }
    setTodos(prev =>
      prev.map(t => (t.id === currentTodo.id ? { ...t, text: newText } : t))
    );
    setIsEditing(false);
    setCurrentTodo({});
  };
  return (
    <>
      {isEditing ? (
        <EditForm
          defaultValue={currentTodo.text}
          updateTodo={updateTodo}
          cancelUpdate={cancelUpdate}
        />
      ) : (
        <Form onSubmit={addNewTodo} />
      )}
      {todos.length === 0 ? (
        <Text textAlign="center">There are no todos…</Text>
      ) : (
        <TodoList
          todos={todos}
          onDelete={handleDelete}
          onEdit={handleEditClick}
        />
      )}
    </>
  );
};
export default Todos;
