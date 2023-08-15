import { StyleSheet, Text, View, Animated } from 'react-native';
import React, { useContext, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import useFadeHook from '../hooks/useFadeHook';

interface Props {
    children: JSX.Element | JSX.Element[]
}

const GradientBackground = ({ children }: Props) => {

    const { colors, prevColors, setMainPrevColors } = useContext(GradientContext);

    const { opacity, fadeIn, fadeOut } = useFadeHook();

    useEffect(() => {
      fadeIn(() => {
        setMainPrevColors(colors);
        fadeOut();
      });
    }, [colors])
    

  return (
    <View style={{ flex: 1}}>
      <LinearGradient
        colors={[ prevColors.primary, prevColors.secondary, 'white' ]}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: .1, y: .1 }}
        end={{ x: .5, y: .7 }}
      />
      <Animated.View 
        style={{ ...StyleSheet.absoluteFillObject, opacity}}
      >
        <LinearGradient
        colors={[ colors.primary, colors.secondary, 'white' ]}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{ x: .1, y: .1 }}
        end={{ x: .5, y: .7 }}
      />

      </Animated.View>
      { children }
    </View>
  )
}

export default GradientBackground

const styles = StyleSheet.create({})