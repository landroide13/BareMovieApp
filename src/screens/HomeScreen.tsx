import { ActivityIndicator, Button, Dimensions, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'

import { StackScreenProps } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';

import { MovieDBNow } from '../interfaces/movieInterface';
import useMovies from '../hooks/useMovies'
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HorizontalSlider from '../components/HorizontalSlider';

const { width } = Dimensions.get('window');

interface Props extends StackScreenProps<any , any>{}

const HomeScreen = ({ navigation }: Props) => {

  const { top } = useSafeAreaInsets();  


  const { MoviesNow, isLoading } = useMovies();

  if(isLoading){
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={100} />
        </View>
    )
  }
  


  return (
    <ScrollView>
        <View style={{ marginTop: top + 20 }}>

        <View style={{ height: 440 }}>
            <Carousel 
                data={MoviesNow} 
                renderItem={({ item }: any) => <MoviePoster movie={ item } /> }
                sliderWidth={ width }
                itemWidth={ 300 }
                inactiveSlideOpacity={ 0.9 }
                />
            </View>

            <HorizontalSlider movies={ MoviesNow } title='Showing Now'/>

        <Button title='To Details' onPress={() => navigation.navigate('Detail')} />
        </View>
    </ScrollView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})