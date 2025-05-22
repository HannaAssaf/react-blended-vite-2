import { BsHandIndexThumb } from 'react-icons/bs';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem text={todo.text} id={todo.id} count={index + 1} />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
