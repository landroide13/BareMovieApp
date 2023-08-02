import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import movieDB from '../api/movieDB'
import { Movie, MovieDBNow } from '../interfaces/movieInterface'

const useMovies = () => {

    const [isLoading, setisLoading] = useState(true);

    const [MoviesNow, setMoviesNow] = useState<Movie[]>([]);

    const getMovies = async () =>{
        const resp = await movieDB.get<MovieDBNow>('/now_playing');
        const movies = resp.data.results;
        setMoviesNow(movies);
        
        setisLoading(false);
    }

    useEffect(() => {
        getMovies();
    }, [])


  return {
    MoviesNow,
    isLoading
  }

}

export default useMovies

