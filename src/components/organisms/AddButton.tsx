import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import BottomLayout from 'components/molecules/BottomLayout';

export default function CreateButton() {
  return (
    <BottomLayout>
      <Link to="/create">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
    </BottomLayout>
  );
}
