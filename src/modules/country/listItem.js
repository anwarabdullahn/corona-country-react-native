import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {List, Card} from '@ant-design/react-native';

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
});

export default function listItem() {
  return (
    <ScrollView
      automaticallyAdjustContentInsets={false}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <List renderHeader={'Latest'}>
        <View style={styles.container}>
          <Card>
            <Card.Header
              title="This is title"
              thumbStyle={{width: 30, height: 30}}
              thumb="https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg"
              extra="this is extra"
            />
            <Card.Body>
              <View style={{height: 42}}>
                <Text style={{marginLeft: 16}}>Card Content</Text>
              </View>
            </Card.Body>
            <Card.Footer
              content="footer content"
              extra="footer extra content"
            />
          </Card>
        </View>
      </List>
    </ScrollView>
  );
}
