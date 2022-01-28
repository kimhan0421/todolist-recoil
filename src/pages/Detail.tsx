import { Fab } from '@mui/material';
import { useParams } from 'react-router';
import EditIcon from '@mui/icons-material/Edit';

import BottomLayout from 'components/BottomLayout';

export default function Detail() {
  const { id } = useParams();

  return (
    <>
      <div>{id}</div>
      <BottomLayout>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
      </BottomLayout>
    </>
  );
}
