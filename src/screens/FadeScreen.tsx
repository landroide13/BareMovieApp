import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import React, { useRef } from 'react';
import useFadeHook from '../hooks/useFadeHook';

const FadeScreen = ({}) => {

    const { opacity, fadeIn, fadeOut } = useFadeHook();

  return (
    <View style={{ flex: 1, 
                   backgroundColor: 'grey', 
                   justifyContent: 'center', 
                   alignItems: 'center' }}>

      <Animated.View style={{ backgroundColor:'#084f6a', 
                    width: 150, 
                    height: 150, 
                    borderColor: 'white', 
                    marginBottom: 20,
                    borderWidth: 5,
                    opacity }} />


        <Button title='Fade' onPress={fadeIn} />

        <Button title='FadeOut' onPress={fadeOut} />
    </View>
  )
}

export default FadeScreen

const styles = StyleSheet.create({})