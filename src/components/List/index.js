/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Gap from '../Gap';
import CardSurah from '../CardSurah';
import Reload from '../Reload';

const List = ({title}) => {
  const [surahs, setSurahs] = useState([]);
  const [displayedSurahs, setDisplayedSurahs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch(
          'https://quran-api.santrikoding.com/api/surah',
        );
        const data = await response.json();
        setSurahs(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching surahs:', error);
      }
    };

    fetchSurahs();
  }, []);

  useEffect(() => {
    updateDisplayedSurahs();
  }, []);

  const updateDisplayedSurahs = () => {
    const shuffledSurahs = shuffleArray(surahs);
    const numberOfSurahs = Math.floor(Math.random() * (7 - 5 + 1)) + 5;
    setDisplayedSurahs(shuffledSurahs.slice(0, numberOfSurahs));
  };

  const shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <View>
      <View style={styles.subContainer}>
        <Text style={styles.title}>{title}</Text>
        <Gap height={20} />
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.cardSection}>
            {isLoading ? (
              <View style={styles.load}>
                <Text style={styles.loadingText}>Loading...</Text>
              </View>
            ) : displayedSurahs.length === 0 ? (
              <View style={styles.load}>
                <Text style={styles.loadingText}>
                  No surahs available, just reload it.
                </Text>
              </View>
            ) : (
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.cardSection}>
                  {displayedSurahs.map(surah => (
                    <View style={{marginRight: 20}} key={surah.nomor}>
                      <CardSurah
                        surahId={surah.nomor}
                        surahName={surah.nama_latin}
                        name={surah.nama}
                      />
                    </View>
                  ))}
                </View>
              </ScrollView>
            )}
          </View>
        </ScrollView>
        <Gap height={-10} />
        <Reload onPress={updateDisplayedSurahs} />
      </View>
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  cardSection: {flexDirection: 'row'},
  refreshButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
  },
  refreshButtonImg: {
    width: 35,
    height: 35,
  },
  title: {
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
  },
  loadingText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
});
