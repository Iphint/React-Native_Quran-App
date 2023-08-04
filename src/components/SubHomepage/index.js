import {ScrollView, StyleSheet, View} from 'react-native';
import React from 'react';
import List from '../List';
import DailyMotivation from '../Motivation';
import Gap from '../Gap';

const SubHomepage = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <DailyMotivation />
        <Gap height={20} />
        <List title={'Best Surah today'} />
      </ScrollView>
    </View>
  );
};

export default SubHomepage;

const styles = StyleSheet.create({
  container: {height: 450, paddingHorizontal: 20},
  cardSection: {flexDirection: 'row'},
});
