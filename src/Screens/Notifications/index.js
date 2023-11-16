import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import {Colors, Icon} from '../../config';
import {Card} from 'native-base';
import Header from '../../components/Header';

const {height, width} = Dimensions.get('screen');

const Notifications = [
  {
    title: 'Adidas New Shoe Offer',
    date: 'August 12, 2021',
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
  {
    title: 'Notification 2',
    date: 'August 11, 2021',
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
  {
    title: 'Notification 3',
    date: 'August 11, 2021',
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.`,
  },
  {
    title: 'Adidas New Shoe Offer',
    date: 'August 09, 2021',
    description: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
  },
];

class App extends Component {
  state = {};

  _renderItem({title, date, description}) {
    return (
      <Card
        style={{
          width: '100%',
          borderRadius: 10,
          marginTop: 20,
          padding: 10,
          marginTop: 20,
        }}>
        <Text
          numberOfLines={1}
          style={{
            // color: Colors.primary,
            fontSize: 14,
            marginTop: 3,
          }}>
          {title}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            color: Colors.text,
            fontSize: 14,
            marginTop: 5,
          }}>
          {date}
        </Text>
        <Text
          numberOfLines={4}
          style={{
            color: Colors.text,
            fontSize: 14,
            marginTop: 10,
          }}>
          {description}
        </Text>
      </Card>
    );
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgb(245,245,240)',
        }}>
        <Header name={'NOTIFICATIONS'} icon={'menu'} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={Notifications}
          contentContainerStyle={{
            flexGrow: 1,
            paddingHorizontal: 20,
            backgroundColor: 'rgb(245,245,240)',
            // backgroundColor: 'red',
          }}
          numColumns={1}
          renderItem={({item}) => this._renderItem(item)}
          // columnWrapperStyle={{justifyContent: 'space-between'}}
        />
      </View>
    );
  }
}

export default App;
