import React from 'react';
import { StyleSheet, Text, KeyboardAvoidingView, Platform, View} from 'react-native';

import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      error: false,
      location: '',
      temperature: 0,
      weather: ''
    }
  }

  handleUpdateLocation = city => {
    this.setState({
      location: city,
    })
  }


  render() {
    const { location } = this.state;
    //onSubmit is prop that is a callback function that is passed in
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <View>
          <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
          <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
          <Text style={[styles.largeText, styles.textStyle]}>24℃</Text>
  
          <SearchInput 
          placeholder="Search any city"
          onSubmit={this.handleUpdateLocation}
          />
          
  
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    textAlign: 'center',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular',
      }, 
      android: {
        fontFamily: 'Roboto',
      }
    })
  },
  largeText: {
    fontSize: 44
  },
  smallText: {
    fontSize: 18,
  },
});
