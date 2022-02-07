import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { todoList } from 'store';
import ListItem from 'components/molecules/ListItem';

export default function List() {
  const todoListState = useRecoilValue(todoList);
  const navigate = useNavigate();

  return (
    <>
      {todoListState.length > 0 ? (
        todoListState.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            onClick={() => navigate(String(item.id))}
          />
        ))
      ) : (
        <Box mt={2} component="div">
          할 일을 추가하세요
        </Box>
      )}
    </>
  );
}
