import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const MovieCard = ({ movie, onClick }) => {
  const posterUrl = movie?.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : ''; // no API, so most will be empty → fallback gray box

  return (
    <Card
      onClick={onClick}
      sx={{
        backgroundColor: '#1e1e1e',
        color: '#fff',
        borderRadius: 2,
        width: 250,
        cursor: 'pointer',
        '&:hover': { transform: 'scale(1.05)', transition: '0.3s' },
      }}
    >
      {posterUrl ? (
        <CardMedia
          component="img"
          image={posterUrl}
          alt={movie?.title || 'Movie Title'}
          sx={{ height: 350, borderRadius: 2 }}
        />
      ) : (
        <CardMedia sx={{ height: 350, bgcolor: '#333', borderRadius: 2 }} />
      )}

      <CardContent>
        <Typography variant="subtitle1" noWrap>
          {movie?.title || 'Movie Title'}
        </Typography>
        <Typography variant="body2" color="gray">
          {movie?.release_date?.split('-')[0] || 'Year'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
