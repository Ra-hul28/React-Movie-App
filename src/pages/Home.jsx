import MovieList from '../components/MovieList';
import { Container, Typography } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingY: 4 }}>
      <Typography variant="h4" sx={{ color: '#fff', marginBottom: 3 }}>
        🔥 Trending Movies
      </Typography>

      <MovieList />
    </Container>
  );
};

export default Home;