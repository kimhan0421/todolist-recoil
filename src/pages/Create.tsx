import { Box } from '@mui/material';

import CreateTextField from 'components/organisms/CreateTextField';
import FloatingButton from 'components/organisms/FloatingButton';

export default function Create() {
  return (
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
      <FloatingButton />
    </Box>
  );
}
