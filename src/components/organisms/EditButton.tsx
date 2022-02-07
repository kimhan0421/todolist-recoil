import { Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import BottomLayout from 'components/molecules/BottomLayout';

export default function EditButton() {
  return (
    <BottomLayout>
      <Fab color="secondary" aria-label="edit">
        <EditIcon />
      </Fab>
    </BottomLayout>
  );
}
