import { Box } from '@mui/material';

import { useContents } from 'store';

export default function Contents() {
  const contents = useContents();

  return (
    <Box
      mt={2}
      component="div"
      sx={{ whiteSpace: 'normal', overflow: 'auto', maxHeight: 500 }}
    >
      {contents}
    </Box>
  );
}
