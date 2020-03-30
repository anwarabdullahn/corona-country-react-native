import React from 'react';
import {ScrollView, FlatList, ActivityIndicator, View} from 'react-native';
import {List} from '@ant-design/react-native';
import Card from '../../components/card';

export default function listItem(props) {
  return (
    <List renderHeader={'Latest'}>
      <ScrollView
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        {props.items.length > 0 ? (
          <FlatList
            data={props.items}
            renderItem={({item}) => (
              <Card item={item} selectItem={props.selectItem} />
            )}
            keyExtractor={item => item.countryInfo._id}
          />
        ) : (
          <View
            style={{
              paddingVertical: 30,
            }}>
            <ActivityIndicator size="large" />
          </View>
        )}
      </ScrollView>
    </List>
  );
}
