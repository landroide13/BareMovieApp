import { StyleSheet, Text, View, Image, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native'
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';
import useMovieDetails from '../hooks/useMovieDetails';
import MovieDetail from '../components/MovieDetail';

const screenHeight = Dimensions.get("screen").height;

interface Props extends StackScreenProps<RootStackParams, 'Detail'>{}

const DetailScreen = ({ route, navigation }: Props) => {

  const movie = route.params;

  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

  const { isLoading, cast, movieFull } = useMovieDetails(movie.id);

  return (
    <ScrollView>
      <View style={ styles.imgContainer }>

        <View style={ styles.imgBorder }>
          <Image 
            source={{ uri: uri }}
            style={ styles.imgPoster }
            />
        </View>

      </View>
      <View style={ styles.marginContainer }>
        <Text style={ styles.subtitle }>{ movie.original_title }</Text>
        <Text style={ styles.title }>{ movie.title }</Text>
      </View>

      <View style={{ marginTop: 20 }}>
        {
          isLoading ? <ActivityIndicator size={ 30 } color="grey" style={{ marginTop: 20 }} />
                    : <MovieDetail movieFull={ movieFull! } cast={ cast }  />
        }
      </View>

      <TouchableOpacity style={ styles.backBtn } onPress={() => navigation.pop()} >
        <Icon name='arrow-left' color='white' size={ 50 } />
      </TouchableOpacity>
      


    </ScrollView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({

  imgPoster:{
    flex: 1
  },

  imgContainer:{
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 10,
    borderBottomEndRadius:25,
    borderBottomStartRadius: 25,
  },

  marginContainer:{
    marginHorizontal: 20,
    marginTop: 20
  },

  subtitle:{
    fontSize: 18,
    opacity: .8
  },

  title:{
    fontSize: 20,
    fontWeight: 'bold'
  },

  imgBorder:{
    flex: 1,
    borderBottomEndRadius:25,
    borderBottomStartRadius: 25,
    overflow: 'hidden',
  },

  backBtn:{
    position: 'absolute',
    zIndex: 100,
    elevation: 9,
    top: 30,
    left: 5
  }
})