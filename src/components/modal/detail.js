import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';
import {Modal, Button} from '@ant-design/react-native';

const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flex: 1,
  },
  image: {
    width: null,
    resizeMode: 'cover',
    height: height * 0.3,
    marginVertical: 10,
    marginHorizontal: 20,
  },
  message: {
    textAlign: 'center',
  },
});

export default function detailModal(props) {
  const {item, visible, onClose} = props;
  return (
    <Modal popup animationType="slide-up" visible={visible}>
      {item && (
        <View style={styles.container}>
          <Image style={styles.image} source={{uri: item.countryInfo.flag}} />
          {Object.keys(item).map(
            e =>
              typeof item[e] !== 'object' && (
                <Text style={{marginLeft: 16}}>{`${e.replace(
                  /([a-z](?=[A-Z]))/g,
                  '$1 ',
                )} : ${item[e]}`}</Text>
              ),
          )}
        </View>
      )}
      <Button type="warning" onPress={onClose}>
        close
      </Button>
    </Modal>
  );
}
