import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any , any>{}

const HomeScreen = ({ navigation }: Props) => {
  return (
    <View>
      <Text>Home Screen</Text>

      <Button title='To Details' onPress={() => navigation.navigate('Detail')} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})