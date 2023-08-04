import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Gap} from '../../components';

const CounterZikr = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>
      <View style={styles.countBtn}>
        <TouchableOpacity style={styles.button} onPress={incrementCounter}>
          <Text style={styles.buttonText}>Count</Text>
        </TouchableOpacity>
        <Gap width={30} />
        <TouchableOpacity
          style={[styles.button, styles.resetButton]}
          onPress={resetCounter}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  counterText: {
    fontSize: 140,
    marginBottom: 20,
    fontFamily: 'Poppins-Bold',
  },
  button: {
    backgroundColor: '#3498db',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  resetButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  countBtn: {flexDirection: 'row-reverse'},
});

export default CounterZikr;
