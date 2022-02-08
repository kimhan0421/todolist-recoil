import { Fab } from '@mui/material';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';

import BottomLayout from 'components/molecules/BottomLayout';
import { useEditTodo } from 'store';

export default function EditFloatingButton() {
  const editTodo = useEditTodo();
  return (
    <BottomLayout>
      <Fab color="inherit" aria-label="update">
        <UpIcon onClick={editTodo} />
      </Fab>
    </BottomLayout>
  );
}
