import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {Movie, MovieDBMoviesResponse} from '../interfaces/movieInterfaces';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
    const nowPlayingPropmise =
      movieDB.get<MovieDBMoviesResponse>('/now_playing');
    const popularPropmise = movieDB.get<MovieDBMoviesResponse>('/popular');
    const topRatedPropmise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
    const upcomingPropmise = movieDB.get<MovieDBMoviesResponse>('/upcoming');

    const resp = await Promise.all([
      nowPlayingPropmise,
      popularPropmise,
      topRatedPropmise,
      upcomingPropmise,
    ]);

    setMoviesState({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      topRated: resp[2].data.results,
      upcoming: resp[3].data.results,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return {
    ...moviesState,
    isLoading,
  };
};
