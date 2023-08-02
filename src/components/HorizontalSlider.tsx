import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import { Movie } from '../interfaces/movieInterface'
import MoviePoster from './MoviePoster'

interface Props{
    title?: string,
    movies: Movie[]
}

const HorizontalSlider = ({ title, movies }: Props) => {

  return (
    <View style={{ 
            height: { title } ? 260 : 230, 
        }}>

        { title !== null ? <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{ title }</Text> : null }

        <FlatList
            data={ movies }
            renderItem={({ item }: any) => (
                <MoviePoster movie={ item } width={ 140 } height={ 200 } />
            )}
            keyExtractor={ (item) => item.id.toString() }
            horizontal={ true }
            showsHorizontalScrollIndicator={ false }
        />
    </View>
  )
}

export default HorizontalSlider

const styles = StyleSheet.create({})