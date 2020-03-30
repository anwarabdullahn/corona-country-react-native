import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Card} from '@ant-design/react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 13,
    paddingHorizontal: 10,
  },
  imageHeader: {
    width: 50,
    height: 30,
  },
});

export default function card(props) {
  const {item} = props;
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => props.selectItem(item)}>
        <Card>
          <Card.Header
            title={item.country}
            thumbStyle={styles.imageHeader}
            thumb={item.countryInfo.flag}
            extra={item.countryInfo.iso3}
          />
          <Card.Body>
            <View style={{height: 52}}>
              <Text style={{marginLeft: 16}}>{`Active : ${item.active}`}</Text>
              <Text style={{marginLeft: 16}}>
                {`Recovered : ${item.recovered}`}
              </Text>
              <Text style={{marginLeft: 16}}>
                {`Today Cases : ${item.todayCases}`}
              </Text>
              <Text style={{marginLeft: 16}}>{`Deaths : ${item.deaths}`}</Text>
            </View>
          </Card.Body>
          <Card.Footer extra="more details" />
        </Card>
      </TouchableWithoutFeedback>
    </View>
  );
}
