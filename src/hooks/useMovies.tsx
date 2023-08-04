import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBReponse } from '../interfaces/movieInterface';

interface MoviesState{
    nowPlaying: Movie[],
    popular: Movie[],
    topRated: Movie[],
    upComming: Movie[],
}

const useMovies = () => {

    const [isLoading, setisLoading] = useState(true);

    const [MoviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upComming: [],
    });
    
    const getMovies = async () =>{

        const nowPlayingProm = movieDB.get<MovieDBReponse>('/now_playing');
        const popularProm = movieDB.get<MovieDBReponse>('/popular');
        const topRatedProm = movieDB.get<MovieDBReponse>('/top_rated');
        const upCommingProm = movieDB.get<MovieDBReponse>('/upcoming');

        const response = await Promise.all([nowPlayingProm, popularProm, topRatedProm, upCommingProm])
        
        setMoviesState({
            nowPlaying: response[0].data.results,
            popular: response[1].data.results ,
            topRated: response[2].data.results ,
            upComming: response[3].data.results ,
        })

        setisLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])


  return {
    ...MoviesState,
    isLoading
  }

}

export default useMovies

