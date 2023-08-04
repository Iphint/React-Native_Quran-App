/* eslint-disable react-hooks/exhaustive-deps */
import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Counter} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainApp');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={Counter} />
      <Text style={styles.title}>It's time to Dzikir</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {fontSize: 26, fontFamily: 'Poppins-Regular'},
});
