import { Box } from '@mui/material';

import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Page } from './components/Page';

const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <NavBar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Page />
      </Box>
      <Footer />
    </Box>
  );
};

export { App };
