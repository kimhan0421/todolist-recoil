import { Box } from '@mui/material';

interface BottomLayoutProps {
  children: React.ReactNode;
}

export default function BottomLayout({ children }: BottomLayoutProps) {
  return (
    <Box
      sx={{
        width: 428,
        height: 64,
        bottom: 24,
        right: 24,
        position: 'fixed',
      }}
    >
      {children}
    </Box>
  );
}
