import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface';
import { useNavigation } from '@react-navigation/native';

interface Props {
    movie: Movie,
    height?: number,
    width?: number
}

const MoviePoster = ({ movie, height = 420, width = 300 }: Props) => {

    const navigation = useNavigation<any>();

  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

  return (
    <TouchableOpacity 
        activeOpacity={0.8} 
        style={{ width, height, marginHorizontal: 5 }}
        onPress={() => navigation.navigate('Detail', movie)}
        >
        <View style={ styles.ImgContainer }>
            <Image style={ styles.image }  source={{ uri }}/>
        </View>
    </TouchableOpacity>
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