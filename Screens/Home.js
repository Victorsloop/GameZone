import React,{useState} from 'react';
import { Text, View, FlatList, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard, } from 'react-native';
import {globalStyles} from '../Styles/global';
import Card from '../Shared/Card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

const Home = ({ navigation }) => {
  console.log('Navigation: ', navigation.navigate);

  const [modalOpen, setModalOpen] = useState(false);

  const [reviews, setReviews] = useState([
    {
      title: 'Foodie. Cooks, learns and golden pallete', rating: 5, body: 'lorem ipsum', key: '1',
    },
    {
      title: 'Super popular , many penpals', rating: 4, body: 'lorem ipsum', key: '2',
    },
    {
      title: 'Fun and Interesting', rating: 3, body: 'lorem ipsum', key: '3',
    },
    {
      title: 'Skilled in all fields. Sewing off the charts', rating: 3, body: 'lorem ipsum', key: '3',
    },
  ]);


  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => [review, ...currentReviews]);
    setModalOpen(false);
  };

  return (
    <View style={globalStyles.container}>
      <Modal animationType="slide" visible={modalOpen}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons name="close" size={24} onPress={() => setModalOpen(false)} style={{ ...styles.modalToggle, ...styles.modalClose }} />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons name="add" size={24} onPress={() => setModalOpen(true)} style={styles.modalToggle} />

      <Text>Home screen</Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});


export default Home;