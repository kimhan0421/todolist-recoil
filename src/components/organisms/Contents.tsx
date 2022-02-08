import { Box, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';

import { editState, useContents } from 'store';
import CreateTextField from './CreateTextField';

export default function Contents() {
  const contents = useContents();
  const edit = useRecoilValue(editState);

  return edit ? (
    <Box
      component="form"
      mt={2}
      sx={{
        '& .MuiTextField-root': { m: 2, width: '38ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <CreateTextField />
    </Box>
  ) : (
    <Box
      mt={2}
      component="div"
      sx={{ whiteSpace: 'normal', overflow: 'auto', maxHeight: 500 }}
    >
      <Typography variant="h5" component="div">
        {contents?.title}
      </Typography>
      <Typography variant="body1" mt={2}>
        {contents?.contents}
      </Typography>
    </Box>
  );
}
