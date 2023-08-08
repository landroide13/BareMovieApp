import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../navigation/Navigation';
import { ScrollView } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';

const screenHeight = Dimensions.get("screen").height;

interface Props extends StackScreenProps<RootStackParams, 'Detail'>{}

const DetailScreen = ({ route }: Props) => {

  const movie = route.params;

  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`

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

      <View style={ styles.marginContainer }>
        <Icon name='star' color="grey" size={ 20 }/>
      </View>
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
  }
})