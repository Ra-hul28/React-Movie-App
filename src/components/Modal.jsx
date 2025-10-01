import { Box, Typography, Modal as MuiModal, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ open, handleClose, movie, onAddToFavorites }) => {
  if (!movie) return null;

  // Poster is optional since we use mock data
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : '';

  return (
    <MuiModal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: { xs: '90%', sm: 600 },
          bgcolor: '#1e1e1e',
          color: '#fff',
          borderRadius: 2,
          boxShadow: 24,
          p: 3,
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{ position: 'absolute', top: 8, right: 8, color: '#fff' }}
        >
          <CloseIcon />
        </IconButton>

        {/* Movie Info */}
        <Box sx={{ display: 'flex', gap: 2, flexDirection: { xs: 'column', sm: 'row' } }}>
          <Box sx={{ flex: '0 0 200px' }}>
            {posterUrl ? (
              <img
                src={posterUrl}
                alt={movie.title}
                style={{ width: '100%', borderRadius: '8px' }}
              />
            ) : (
              <Box
                sx={{
                  width: '100%',
                  height: 300,
                  bgcolor: '#333',
                  borderRadius: 2,
                }}
              />
            )}
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              {movie.title || 'Untitled Movie'}
            </Typography>
            <Typography variant="body2" sx={{ color: 'gray', mb: 1 }}>
              {movie.release_date || 'Unknown Date'}
            </Typography>
            <Typography variant="body1" sx={{ mb: 1 }}>
              {movie.overview || 'No overview available.'}
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Rating: {movie.vote_average || 'N/A'}
            </Typography>

            {/* Action Buttons */}
            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#e50914',
                  color: '#fff',
                  textTransform: 'none',
                  '&:hover': { backgroundColor: '#b0060f' },
                }}
                onClick={() => alert(`Playing trailer for ${movie.title}`)}
              >
                ▶ Watch Now
              </Button>

              <Button
                variant="outlined"
                sx={{
                  borderColor: '#e50914',
                  color: '#e50914',
                  textTransform: 'none',
                  '&:hover': {
                    borderColor: '#b0060f',
                    color: '#b0060f',
                  },
                }}
                onClick={() => onAddToFavorites(movie)}
              >
                ❤️ Add to Favorites
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </MuiModal>
  );
};

export default Modal;
 



