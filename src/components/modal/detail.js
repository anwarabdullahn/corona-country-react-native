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
    borderColor: '#000',
    borderWidth: 1,
  },
  message: {
    marginLeft: 16,
  },
});

export default function detailModal(props) {
  const {item, visible, onClose} = props;
  return (
    <Modal popup animationType="slide-up" visible={visible}>
      {item && (
        <View style={styles.container}>
          {item.countryInfo.flag && (
            <Image
              style={styles.image}
              source={
                item.countryInfo
                  ? {uri: item.countryInfo.flag, cache: 'only-if-cached'}
                  : require('../../assets/fight.png')
              }
            />
          )}
          {Object.keys(item).map(
            (element, index) =>
              typeof item[element] !== 'object' && (
                <Text style={styles.message} key={index}>{`${element.replace(
                  /([a-z](?=[A-Z]))/g,
                  '$1 ',
                )} : ${item[element]}`}</Text>
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
