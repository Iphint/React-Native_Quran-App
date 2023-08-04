import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Quran} from '../../assets';
import {Gap, Motivation} from '../../components';

const HomePage = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const subtitles = [
    "Penuhi hari Anda dengan keberkahan dari Al-Qur'an.",
    "Temukan ketenangan dalam ayat-ayat suci Al-Qur'an.",
    "Raih pahala dengan membaca Al-Qur'an setiap hari.",
    "Jadikan Al-Qur'an sebagai panduan hidup Anda.",
  ];
  useEffect(() => {
    const timer = setTimeout(() => {
      setSubtitleIndex(prevIndex => (prevIndex + 1) % subtitles.length);
    }, 2000);

    return () => clearTimeout(timer);
  }, [subtitleIndex, subtitles.length]);
  return (
    <View style={styles.container}>
      <View style={styles.cover}>
        <ImageBackground source={Quran} style={styles.logo} />
        <Gap height={20} />
        <View>
          <Text style={styles.title}>Sudahkah baca Qur'an hari ini ... ?</Text>
        </View>
        <Gap height={10} />
        <Text style={styles.subTitle}>{subtitles[subtitleIndex]}</Text>
      </View>
      <Gap height={20} />
      <View>
        <Motivation />
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  cover: {
    height: 280,
    backgroundColor: '#91C8E4',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  logo: {height: 100, width: 90},
  title: {fontSize: 16, fontFamily: 'Poppins-Medium'},
  subTitle: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});
