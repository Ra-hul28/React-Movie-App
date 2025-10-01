// src/components/MovieList.jsx
import { Box, Typography, useMediaQuery, keyframes, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MovieCard from './MovieCard';
import Modal from './Modal';
import { useEffect, useState, useRef } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useFavorites } from '../context/FavoritesContext';

const categories = ['Horror', 'Adventure', 'Fantasy', 'Crime Thriller', 'Comedy'];

const growLine = keyframes`
  from { width: 0; }
  to { width: 60px; }
`;

const MovieList = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [movies, setMovies] = useState({});
  const scrollRefs = useRef({});

  // Modal state
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [open, setOpen] = useState(false);

  // Favorites context (so we can pass addToFavorites into Modal)
  const { addToFavorites } = useFavorites();

  // Scroll functions
  const scrollLeft = (category) => {
    scrollRefs.current[category]?.scrollBy({ left: -300, behavior: 'smooth' });
  };
  const scrollRight = (category) => {
    scrollRefs.current[category]?.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // Mock movies (no API)
  useEffect(() => {
    const fakeMovies = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      title: `Movie ${i + 1}`,
      poster_path: null,
      release_date: '2023-01-01',
      overview: 'Sample overview',
      vote_average: (Math.random() * 10).toFixed(1),
    }));
    const moviesObj = {};
    categories.forEach((cat) => (moviesObj[cat] = fakeMovies));
    setMovies(moviesObj);
  }, []);

  // Open/close handlers for modal
  const handleOpen = (movie) => {
    setSelectedMovie(movie);
    setOpen(true);
  };
  const handleClose = () => {
    setSelectedMovie(null);
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {categories.map((category) => (
        <Box key={category}>
          {/* Category Title */}
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, color: '#fff', textTransform: 'uppercase' }}
            >
              {category}
            </Typography>
            <Box
              sx={{
                width: 60,
                height: 4,
                backgroundColor: '#e50914',
                borderRadius: 2,
                mt: 1,
                animation: `${growLine} 0.8s ease-out`,
                animationFillMode: 'forwards',
              }}
            />
          </Box>

          {/* Scrollable Row (Desktop & Mobile) */}
          <Box sx={{ position: 'relative' }}>
            {/* Left Arrow */}
            <IconButton
              onClick={() => scrollLeft(category)}
              sx={{
                position: 'absolute',
                left: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                color: '#fff',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
              }}
            >
              <ArrowBackIosIcon />
            </IconButton>

            {/* Right Arrow */}
            <IconButton
              onClick={() => scrollRight(category)}
              sx={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 10,
                color: '#fff',
                backgroundColor: 'rgba(0,0,0,0.5)',
                '&:hover': { backgroundColor: 'rgba(0,0,0,0.7)' },
              }}
            >
              <ArrowForwardIosIcon />
            </IconButton>

            {/* Scroll Container */}
            <Box
              ref={(el) => (scrollRefs.current[category] = el)}
              sx={{
                display: 'flex',
                gap: 2,
                overflowX: 'auto',
                scrollSnapType: 'x mandatory',
                '&::-webkit-scrollbar': { display: 'none' },
                px: 6, // padding to avoid overlap with arrows
              }}
            >
              {(movies[category] || []).map((movie) => (
                <Box key={movie.id} sx={{ flex: '0 0 auto', width: 250 }}>
                  {/* pass onClick so clicking opens modal */}
                  <MovieCard movie={movie} onClick={() => handleOpen(movie)} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      ))}

      {/* Modal (passes addToFavorites handler from context) */}
      <Modal
        open={open}
        handleClose={handleClose}
        movie={selectedMovie}
        onAddToFavorites={addToFavorites}
      />
    </Box>
  );
};

export default MovieList;



