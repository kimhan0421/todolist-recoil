import { useRecoilValue } from 'recoil';
import { AppBar, Toolbar as MUIToolbar, Typography } from '@mui/material';

import { title } from 'store';

export default function Toolbar() {
  const text = useRecoilValue(title);

  return (
    <AppBar position="static">
      <MUIToolbar variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          {text}
        </Typography>
      </MUIToolbar>
    </AppBar>
  );
}
