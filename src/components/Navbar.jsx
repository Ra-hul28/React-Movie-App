import { useState } from 'react';
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
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'Favorites', path: '/favorites' },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: '#121212',
          boxShadow: '0 2px 10px rgba(0,0,0,0.7)',
          paddingX: 2,
        }}
      >
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <MovieIcon sx={{ color: '#f50057', fontSize: 30, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ fontWeight: 'bold', color: '#fff', letterSpacing: 1 }}
            >
              MovieHub
            </Typography>
          </Box>

          {isMobile ? (
            <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navLinks.map((link) => (
                <Button
                  key={link.title}
                  component={Link}
                  to={link.path}
                  sx={{ color: '#fff', textTransform: 'none' }}
                >
                  {link.title}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.title} disablePadding>
                <ListItemButton component={Link} to={link.path}>
                  <ListItemText primary={link.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;

