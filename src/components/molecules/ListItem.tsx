import { ListItem as MUIListItem, ListItemText, Divider } from '@mui/material';

export default function ListItem({
  item,
  onClick,
}: {
  item: { title: string };
  onClick: () => void;
}): JSX.Element {
  return (
    <>
      <MUIListItem button onClick={onClick}>
        <ListItemText primary={item.title} />
      </MUIListItem>
      <Divider />
    </>
  );
}
