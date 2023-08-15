import { ActivityIndicator, Button, Dimensions, StyleSheet, Text, View, FlatList, ScrollView } from 'react-native'
import React, { useContext, useEffect } from 'react'

import { StackScreenProps } from '@react-navigation/stack';
import Carousel from 'react-native-snap-carousel';

import useMovies from '../hooks/useMovies'
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HorizontalSlider from '../components/HorizontalSlider';
import GradientBackground from '../components/GradientBackground';
import getColors  from 'react-native-image-colors';
import ImageColors from 'react-native-image-colors';
import { getImgColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';

const { width } = Dimensions.get('window');

interface Props extends StackScreenProps<any , any>{}

const HomeScreen = ({ navigation }: Props) => {

  const { top } = useSafeAreaInsets();  

  const { nowPlaying, isLoading, popular, topRated, upComming } = useMovies();

  const { setMainColors } = useContext( GradientContext );

  const getPosterColors = async (idx: number) => {

    const movie = nowPlaying[idx]
    const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
    
    const [ primary = 'grey', secondary = 'orange' ] = await getImgColors(uri);

    setMainColors({ primary, secondary })

    //console.log(primary, secondary);
  }

  useEffect(() => {
    if(nowPlaying.length > 0){
      getPosterColors(0);
    }
  }, [nowPlaying])

  if(isLoading){
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={100} />
        </View>
    )
  }
  
  return (
    <GradientBackground>
      <ScrollView>
          <View style={{ marginTop: top + 20 }}>

          <View style={{ height: 440 }}>
              <Carousel 
                  data={ nowPlaying } 
                  renderItem={({ item }: any) => <MoviePoster movie={ item } /> }
                  sliderWidth={ width }
                  itemWidth={ 300 }
                  inactiveSlideOpacity={ 0.9 }
                  onSnapToItem={ idx => getPosterColors( idx )}
                  />
              </View>

              <HorizontalSlider movies={ popular } title='Popular Movies'/>
              <HorizontalSlider movies={ topRated } title='Top Rated Movies'/>
              <HorizontalSlider movies={ upComming } title='Up Comming Movies'/>

          {/* <Button title='To Details' onPress={() => navigation.navigate('Detail')} /> */}
          </View>
      </ScrollView>
    </GradientBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})