import Text from '../Text/Text';
import { RiDeleteBinLine } from 'react-icons/ri';
import style from './TodoListItem.module.css';

const TodoListItem = ({ text, count }) => {
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        {`TODO #${count}`}
      </Text>
      <Text>{text}</Text>
      <button className={style.deleteButton} type="button">
        <RiDeleteBinLine size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
