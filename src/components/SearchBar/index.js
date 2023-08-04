import {Button, StyleSheet, TextInput, View} from 'react-native';
import React, {useState, useEffect} from 'react';

const SearchBar = ({onSearch, inputTitle}) => {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    onSearch(searchQuery);
  }, [searchQuery, onSearch]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={inputTitle}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholderTextColor="#aaa"
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
    marginHorizontal: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingHorizontal: 12,
    color: '#333',
  },
});
