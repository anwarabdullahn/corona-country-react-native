import React from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native'
import { List } from '@ant-design/react-native';
import Card from '../../components/card';

export default function listItem(props) {
  return (
    <View>
      {props.items.length > 0 ? (
        <FlatList
          contentContainerStyle={{ paddingBottom: 100 }}
          data={props.items}
          renderItem={({ item }) => (
            <List.Item onPress={() => props.selectItem(item)}>
              <Card item={item} />
            </List.Item>
          )}
          keyExtractor={(item, i) => `${item.countryInfo._id}${i}`}
        />
      ) : (
          <ActivityIndicator
            style={{
              paddingVertical: 30,
            }}
            size="large"
          />
        )}
    </View>
  );
}
