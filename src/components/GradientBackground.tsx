import {View, StyleSheet, Animated} from 'react-native';
import React, {useContext, useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';
// import {useFade} from '../hooks/useFade';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const GradientBackground = ({children}: Props) => {
  const {colors} = useContext(GradientContext);

  // const {opacity, fadeIn, fadeOut} = useFade();

  // useEffect(() => {
  //   fadeIn(() => {
  //     setPrevMainColors(colors);
  //     // fadeOut(0);
  //   });
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [colors]);

  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[colors.primary, colors.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}
      />
      {/* <Animated.View style={{...StyleSheet.absoluteFillObject, opacity}}>
        <LinearGradient
          colors={[colors.primary, colors.secondary, 'white']}
          style={{...StyleSheet.absoluteFillObject}}
          start={{x: 0.1, y: 0.1}}
          end={{x: 0.5, y: 0.7}}
        />
      </Animated.View> */}
      {children}
    </View>
  );
};
