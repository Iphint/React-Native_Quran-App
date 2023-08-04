import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useRef, useEffect, useState} from 'react';
import CardMotivation from '../CardMotivation';
import Gap from '../Gap';

const motivations = [
  {
    text: "Membaca Al-Qur'an mendatangkan ketenangan dan kedamaian bagi hati.",
    verse: "QS. Ar-Ra'd (13:28)",
  },
  {
    text: "Setiap huruf yang dibaca dari Al-Qur'an memiliki pahala yang besar.",
    verse: 'QS. Az-Zumar (39:10)',
  },
  {
    text: "Membaca Al-Qur'an adalah bentuk ibadah yang mendekatkan diri kepada Allah.",
    verse: 'QS. Al-Isra (17:9)',
  },
];

const DailyMotivation = () => {
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (flatListRef.current) {
        setCurrentIndex((currentIndex + 1) % motivations.length);
        flatListRef.current.scrollToIndex({
          index: currentIndex,
          animated: true,
        });
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <View>
      <Text style={styles.title}>Today's Motivation</Text>
      <Gap height={20} />
      <FlatList
        ref={flatListRef}
        data={motivations}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        renderItem={({item}) => (
          <CardMotivation motivation={item.text} verse={item.verse} />
        )}
      />
    </View>
  );
};

export default DailyMotivation;

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
  },
});
