import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Box, Fab, TextField } from '@mui/material';

import BottomLayout from 'components/BottomLayout';
import { Link } from 'react-router-dom';

export default function Create() {
  return (
    <>
      <Box
        component="form"
        mt={2}
        sx={{
          '& .MuiTextField-root': { m: 2, width: '38ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Title"
          defaultValue="input title"
        />
        <TextField
          required
          id="outlined-multiline-static"
          label="Contents"
          multiline
          rows={4}
          defaultValue="Contents"
        />
        <Link to="/">
          <BottomLayout>
            <Fab color="inherit" aria-label="update">
              <UpIcon />
            </Fab>
          </BottomLayout>
        </Link>
      </Box>
    </>
  );
}
