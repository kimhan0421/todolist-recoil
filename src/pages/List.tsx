import { Link } from 'react-router-dom';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import ListItem from 'components/ListItem';
import BottomLayout from 'components/BottomLayout';

export default function List() {
  return (
    <>
      <ListItem />
      <BottomLayout>
        <Link to="/create">
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </BottomLayout>
    </>
  );
}
