import { Fab } from '@mui/material';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';

import BottomLayout from 'components/molecules/BottomLayout';
import { useAddTodo } from 'store';

export default function FloatingButton() {
  const addTodo = useAddTodo();

  return (
    <BottomLayout>
      <Fab color="inherit" aria-label="update">
        <UpIcon onClick={addTodo} />
      </Fab>
    </BottomLayout>
  );
}
