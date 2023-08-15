import { StyleSheet, Text, View, Animated } from 'react-native'
import React, { useRef } from 'react'

const useFadeHook = () => {

    const opacity = useRef( new Animated.Value(0) ).current;

    const fadeIn = (callback?: Function) => {
        Animated.timing( opacity, { toValue: 1, duration: 500, useNativeDriver: true })
        .start(() => callback? callback(): null);
    }

    const fadeOut = () => {
        Animated.timing( opacity, { toValue: 0, duration: 500, useNativeDriver: true }).start();
    }

  return {
    opacity,
    fadeIn,
    fadeOut
  }
}

export default useFadeHook

const styles = StyleSheet.create({})