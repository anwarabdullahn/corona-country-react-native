import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Modal, Button} from '@ant-design/react-native';

const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  image: {
    width: null,
    resizeMode: 'cover',
    height: height * 0.45,
  },
  message: {
    textAlign: 'center',
  },
});

export default function errorModal(props) {
  return (
    <Modal popup animationType="slide-up" visible={props.visible}>
      <View style={styles.container}>
        <Image style={styles.image} source={require('../assets/fight.png')} />
        <Text style={styles.message}>{props.message}</Text>
      </View>
      <Button type="warning" onPress={props.onClose}>
        close
      </Button>
    </Modal>
  );
}
