import {Image, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcReload} from '../../assets';

const Reload = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.refreshButton}>
      <Image source={IcReload} style={styles.refreshButtonImg} />
    </TouchableOpacity>
  );
};

export default Reload;

const styles = StyleSheet.create({
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
});
