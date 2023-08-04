import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const CardMotivation = ({motivation, verse}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{motivation}</Text>
      <Text style={styles.verse}>{verse}</Text>
    </View>
  );
};

export default CardMotivation;

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
    width: 370,
    marginRight: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
    fontFamily: 'Poppins-Medium',
  },
  verse: {
    fontSize: 14,
    textAlign: 'center',
    color: '#666',
    fontFamily: 'Poppins-Italic',
  },
});
