import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MovieIcon from '@mui/icons-material/Movie';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: '#121212',
        boxShadow: '0 2px 10px rgba(0,0,0,0.7)',
        paddingX: 2,
      }}
    >
      <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
        {/* Left: Logo + App Name */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <MovieIcon sx={{ color: '#f50057', fontSize: 30, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: 'bold',
              color: '#fff',
              letterSpacing: 1,
            }}
          >
            MovieHub
          </Typography>
        </Box>

        {/* Right: Nav Buttons or Hamburger */}
        {isMobile ? (
          <IconButton edge="end" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button component={Link} to="/" sx={{ color: '#fff', textTransform: 'none' }}>
              Home
            </Button>
            <Button component={Link} to="/favorites" sx={{ color: '#fff', textTransform: 'none' }}>
              Favorites
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
