import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Gap, SearchBar, CardSurah} from '../../components';

const QuranPage = () => {
  const [surahs, setSurahs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredSurahs, setFilteredSurahs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await fetch(
          'https://quran-api.santrikoding.com/api/surah',
        );
        const data = await response.json();
        setSurahs(data);
        setIsLoading(false);
        setFilteredSurahs(data);
      } catch (error) {
        console.error('Error fetching surahs:', error);
      }
    };

    fetchSurahs();
  }, []);

  useEffect(() => {
    if (!searchQuery) {
      setFilteredSurahs(surahs);
    } else {
      const filtered = surahs.filter(
        surah =>
          surah.nama_latin.toLowerCase().includes(searchQuery.toLowerCase()) ||
          surah.nomor.toString().includes(searchQuery),
      );
      setFilteredSurahs(filtered);
    }
  }, [searchQuery, surahs]);

  return (
    <View style={styles.container}>
      <Gap height={30} />
      <SearchBar
        onSearch={setSearchQuery}
        inputTitle="Search bisa dengan no surah / nama latin"
        value={searchQuery}
      />
      {isLoading ? (
        <ActivityIndicator style={styles.loading} size="large" color="#000" />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>
          {filteredSurahs.length === 0 ? (
            <Text style={styles.emptyText}>
              Tidak ada hasil yang ditemukan.
            </Text>
          ) : (
            filteredSurahs.map(surah => (
              <View key={surah.nomor}>
                <CardSurah
                  surahId={surah.nomor}
                  surahName={surah.nama}
                  name={surah.nama_latin}
                />
              </View>
            ))
          )}
        </ScrollView>
      )}
    </View>
  );
};

export default QuranPage;

const styles = StyleSheet.create({
  container: {marginHorizontal: 20},
  loading: {justifyContent: 'center', alignItems: 'center'},
  emptyText: {textAlign: 'center', marginTop: 100, fontSize: 16},
});
