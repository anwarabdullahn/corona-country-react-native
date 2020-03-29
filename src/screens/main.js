import React, {Component, Fragment} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  Alert,
  Keyboard,
  ScrollView,
  View,
} from 'react-native';
import {
  List,
  Card,
  WingBlank,
  WhiteSpace,
  SearchBar,
} from '@ant-design/react-native';
import ErrorModal from '../components/errorModal';
import CountryModule from '../modules/country';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      country: '',
      error: false,
    };
  }

  onCountryChange = country =>
    this.setState({
      country,
    });

  onBtnPress = () => {
    Keyboard.dismiss();
    this.setState(prevState => ({
      error: !prevState.error,
    }));
  };

  onClear = () => this.setState({country: ''});

  render() {
    console.log(this.state, 'this.state');
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <SearchBar
            value={this.state.country}
            placeholder="country name"
            cancelText="search"
            onSubmit={value => Alert.alert(value)}
            onCancel={this.onBtnPress}
            onChange={this.onCountryChange}
          />
          <CountryModule.ListItem />
          <ErrorModal
            visible={this.state.error}
            onClose={this.onBtnPress}
            message={"Sorry, We can't find your country data"}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
}
