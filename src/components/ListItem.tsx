import { Link } from 'react-router-dom';
import { ListItem as MUIListItem, ListItemText, Divider } from '@mui/material';

export default function ListItem() {
  return (
    <>
      <Link to="1">
        <MUIListItem button>
          <ListItemText primary="Inbox" />
        </MUIListItem>
      </Link>
      <Divider />
    </>
  );
}
