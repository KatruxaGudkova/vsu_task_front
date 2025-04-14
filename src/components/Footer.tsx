import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bottom: 0,
        backgroundColor: 'primary.main',
        color: 'white',
        py: 3,
        textAlign: 'center',
      }}
    >
      <Typography variant="body1">© 2025 V&K Все права защищены.</Typography>
    </Box>
  );
};

export { Footer };
