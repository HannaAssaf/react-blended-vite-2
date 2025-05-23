import { BsHandIndexThumb } from 'react-icons/bs';
import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, onDelete, onEdit }) => {
  return (
    <Grid>
      {todos.map((todo, index) => (
        <GridItem key={todo.id}>
          <TodoListItem
            text={todo.text}
            id={todo.id}
            count={index + 1}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default TodoList;
