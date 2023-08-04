import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Detail'>{}

const DetailScreen = ({ route }: Props) => {

  

  const movie = route.params;

  console.log(movie.title)


  return (
    <View>
      <Text>Detail Screen</Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({})