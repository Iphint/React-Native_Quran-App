import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {IcQuran} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const CardSurah = ({surahId, surahName, name}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailSurah', {surahId})}
      activeOpacity={0.9}>
      <View style={styles.container}>
        <Text style={styles.text}>{surahName}</Text>
        <Text style={styles.textArab}>{name}</Text>
        <Image source={IcQuran} style={styles.image} resizeMode="contain" />
      </View>
    </TouchableOpacity>
  );
};

export default CardSurah;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
    fontFamily: 'Poppins-Medium',
  },
  textArab: {fontFamily: 'NotoNaskhArabic-SemiBold', fontSize: 19},
  image: {
    width: 100,
    height: 100,
  },
});
