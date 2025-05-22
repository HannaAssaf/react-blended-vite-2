import { useState } from 'react';
import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import { nanoid } from 'nanoid';
import TodoList from '../components/TodoList/TodoList';

const initialTodos = [
  { id: '1', text: 'Practice more' },
  { id: '2', text: 'Get all tasks done on time' },
];

const Todos = () => {
  const [todos, setTodos] = useState(initialTodos);

  const addNewTodo = inputValue => {
    setTodos(prev => [...prev, { text: inputValue, id: nanoid() }]);
  };

  return (
    <>
      <Form onSubmit={addNewTodo} />
      {todos.length === 0 ? (
        <Text textAlign="center">There are no todos…</Text>
      ) : (
        <TodoList todos={todos} />
      )}
    </>
  );
};
export default Todos;
