import React, {Component, Fragment} from 'react';
import {SafeAreaView, StatusBar, Keyboard} from 'react-native';
import {SearchBar} from '@ant-design/react-native';
import {connect} from 'react-redux';
import Modal from '../components/modal';
import CountryModule from '../modules/country';
import {getAllCountries, searchCountry} from '../redux/country/action';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      country: '',
      error: false,
      showDetail: false,
      selectedCountry: null,
      isFiltered: false,
    };
  }

  componentDidMount() {
    this.props.getAllCountries();
  }

  componentDidUpdate() {
    if (this.state.country === '' && this.state.isFiltered) {
      Keyboard.dismiss();
      this.setIsFiltered(false);
    }
    if (this.state.country !== '' && !this.state.isFiltered) {
      Keyboard.dismiss();
      this.setIsFiltered(true);
    }
    if (
      this.props.filteredCountry.length === 0 &&
      this.state.isFiltered &&
      !this.state.error
    ) {
      Keyboard.dismiss();
      setTimeout(() => this.setState({error: true}), 3000);
    }
  }

  setIsFiltered = isFiltered => this.setState({isFiltered});

  onCountryChange = countryName => {
    this.setState({country: countryName});
    if (!this.state.error) {
      this.props.searchCountry(countryName);
    }
  };

  onErrorPress = () => {
    Keyboard.dismiss();
    this.setState({
      error: false,
      country: '',
      isFiltered: false,
    });
  };

  onDetailPress = () => {
    this.setState(prevState => ({
      showDetail: !prevState.showDetail,
    }));
  };

  selectItem = selectedCountry => {
    this.setState({
      selectedCountry,
      showDetail: true,
    });
  };

  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <SearchBar
            value={this.state.country}
            placeholder="country name"
            cancelText="search"
            onChange={this.onCountryChange}
          />
          <CountryModule.ListItem
            items={
              !this.state.isFiltered
                ? this.props.countries
                : this.props.filteredCountry
            }
            selectItem={this.selectItem}
          />
          <Modal.Error
            visible={this.state.error}
            onClose={this.onErrorPress}
            message={"Sorry, We can't find your country data"}
          />
          <Modal.Detail
            visible={this.state.showDetail}
            onClose={this.onDetailPress}
            item={this.state.selectedCountry}
          />
        </SafeAreaView>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  getAllCountries,
  searchCountry,
};

const mapStateToProps = state => ({
  countries: state.country.countries,
  filteredCountry: state.country.filteredCountry,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
