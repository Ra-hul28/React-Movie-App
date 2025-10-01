import { Box, Container, Grid, Typography, Button } from '@mui/material';
import { useFavorites } from '../context/FavoritesContext';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <Typography variant="h4" sx={{ color: '#fff', marginBottom: 3 }}>
        ❤️ Your Favorites
      </Typography>

      {favorites.length === 0 ? (
        <Typography sx={{ color: 'gray' }}>No favorites yet.</Typography>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((movie) => (
            <Grid item xs={12} sm={6} md={3} key={movie.id}>
              <Box sx={{ position: 'relative' }}>
                <MovieCard movie={movie} />
                <Button
                  variant="outlined"
                  onClick={() => removeFromFavorites(movie.id)}
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    borderColor: '#e50914',
                    color: '#e50914',
                    textTransform: 'none',
                    '&:hover': { backgroundColor: 'rgba(229,9,20,0.1)' },
                  }}
                >
                  Remove
                </Button>
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Favorites;
