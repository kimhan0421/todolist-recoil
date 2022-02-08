import { Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import BottomLayout from 'components/molecules/BottomLayout';
import { useEditState } from 'store';

export default function EditButton() {
  const edit = useEditState();

  return (
    <BottomLayout>
      <Fab color="secondary" aria-label="edit">
        <EditIcon onClick={edit} />
      </Fab>
    </BottomLayout>
  );
}
