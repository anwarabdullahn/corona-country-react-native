import React, {Component, Fragment} from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import {
  InputItem,
  Button,
  WingBlank,
  WhiteSpace,
} from '@ant-design/react-native';
import ErrorModal from '../components/errorModal';

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
    console.log('sini');
    this.setState(prevState => ({
      error: !prevState.error,
    }));
  };

  render() {
    console.log(this.state, 'this.state');
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <WingBlank>
            <InputItem
              clear
              value={this.state.country}
              onChange={this.onCountryChange}
              placeholder="search country"
            />
            <WhiteSpace />
            <Button type="primary" onPress={this.onBtnPress}>
              search
            </Button>
          </WingBlank>
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
