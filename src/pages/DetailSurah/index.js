/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import HTML from 'react-native-render-html';
import {IcAppologize, IcAudio} from '../../assets';
import {useRoute} from '@react-navigation/native';
import {Gap} from '../../components';

const DetailSurah = () => {
  const route = useRoute();
  const {surahId} = route.params;
  const [surahDetails, setSurahDetails] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [currentSurahId, setCurrentSurahId] = useState(surahId);

  useEffect(() => {
    const fetchSurahDetails = async () => {
      try {
        const response = await fetch(
          `https://quran-api.santrikoding.com/api/surah/${currentSurahId}`,
        );
        const data = await response.json();
        setSurahDetails(data);
      } catch (error) {
        console.error('Error fetching surah details:', error);
      }
    };

    fetchSurahDetails();
  }, [currentSurahId]);

  const handlePrevSurah = () => {
    if (currentSurahId > 1) {
      setCurrentSurahId(currentSurahId - 1);
    }
  };

  const handleNextSurah = () => {
    if (currentSurahId < 114) {
      setCurrentSurahId(currentSurahId + 1);
    }
  };

  if (!surahDetails) {
    return null;
  }

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{surahDetails.nama_latin}</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity onPress={toggleModal} style={styles.audioContainer}>
          <Image source={IcAudio} style={styles.audio} />
          <Text style={styles.audioText}>Audio</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={handlePrevSurah}>
            <Text>Prev</Text>
          </TouchableOpacity>
          <Gap width={30} />
          <TouchableOpacity onPress={handleNextSurah}>
            <Text>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={showModal} animationType="slide">
        <View style={styles.modalContent}>
          <Text>
            This feature will be coming soon. Please be patient, brothers &
            sisters.
          </Text>
          <Image source={IcAppologize} style={styles.sorry} />
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        {surahDetails.ayat.map(ayat => (
          <View key={ayat.id} style={styles.ayatCard}>
            <Text style={styles.ayatNumber}>{ayat.nomor}</Text>
            <View style={styles.ayatContent}>
              <Text style={styles.ayatTextAr}>{ayat.ar}</Text>
              <Text style={styles.ayatTextIdn}>{ayat.idn}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
    fontFamily: 'Poppins-Medium',
  },
  audioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  audio: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  audioText: {
    fontSize: 16,
  },
  ayatCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 10,
  },
  ayatContent: {
    flex: 1,
    marginLeft: 10,
  },
  ayatNumber: {
    width: 30,
    fontWeight: 'bold',
    fontSize: 18,
  },
  ayatTextAr: {
    fontSize: 25,
    marginBottom: 5,
    fontFamily: 'NotoNaskhArabic-Medium',
  },
  ayatTextIdn: {
    fontSize: 13,
    color: '#888',
    fontFamily: 'Poppins-Medium',
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignSelf: 'center',
  },
  closeButtonText: {
    color: 'red',
    fontWeight: 'bold',
  },
  sorry: {
    width: 120,
    height: 120,
  },
});

export default DetailSurah;
