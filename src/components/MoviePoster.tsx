import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface';

interface Props {
    movie: Movie,
    height?: number,
    width?: number
}

const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

  

  return (
    <View style={{ width, height, marginHorizontal: 5 }}>
        <View style={ styles.ImgContainer }>
            <Image style={ styles.image }  source={{ uri }}/>
        </View>
    </View>
  )
}

export default MoviePoster

const styles = StyleSheet.create({

    ImgContainer:{
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 10,
    },

    image:{
        flex: 1,
        borderRadius: 18,
    }
})