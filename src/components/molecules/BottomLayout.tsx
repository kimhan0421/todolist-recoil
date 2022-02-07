import { Box } from '@mui/material';

interface BottomLayoutProps {
  children: React.ReactNode;
}

export default function BottomLayout({ children }: BottomLayoutProps) {
  return (
    <Box
      sx={{
        height: 56,
        position: 'fixed',
        bottom: 24,
        paddingLeft: 44,
        margin: 'auto',
      }}
    >
      {children}
    </Box>
  );
}
