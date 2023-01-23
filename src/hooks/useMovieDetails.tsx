import {useState, useEffect} from 'react';
import movieDB from '../api/movieDB';
import {Cast, CreditsResponse} from '../interfaces/creditsInterfaces';
import {MovieFull} from '../interfaces/movieInterfaces';

interface MovieDetails {
  cast: Cast[];
  isLoading: boolean;
  movieFull?: MovieFull;
}

export default function useMovieDetails(movieId: number) {
  const [state, setstate] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = await movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = await movieDB.get<CreditsResponse>(
      `/${movieId}/credits`,
    );

    const [movieDetailsResponse, castPromiseResponse] = await Promise.all([
      movieDetailsPromise,
      castPromise,
    ]);
    setstate({
      isLoading: false,
      movieFull: movieDetailsResponse.data,
      cast: castPromiseResponse.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /*
  El ...state es lo mismo que poner:
  isLoading: state.isLoading,
  movieFull: state.movieFull,
  cast: state.cast
  */
  return {
    ...state,
  };
}
