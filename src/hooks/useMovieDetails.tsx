import { useState, useEffect } from "react"
import movieDB from "../api/movieDB";
import { MovieFull } from "../interfaces/movieInterface";
import { Cast, CreditsResponse } from "../interfaces/creditsInterface";

interface MovieDetails{
    isLoading: boolean,
    movieFull?: MovieFull,
    cast: Cast[]
}

const useMovieDetails = (movieId: number) => {

    const [state, setstate] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const GetMovieDetails = async() => {
        const movieDetilsProm = await movieDB.get<MovieFull>(`/${ movieId }`);
        const castProm = movieDB.get<CreditsResponse>(`/${ movieId }/credits`);

        const [ movieDetailsRes, castRes ] = await Promise.all([movieDetilsProm, castProm ]);

        setstate({
            isLoading: false,
            movieFull: movieDetailsRes.data,
            cast: castRes.data.cast
        })
        
    };

    useEffect(() => {
        GetMovieDetails();
      }, [])

    return{
        ...state
    }  
}

export default useMovieDetails

