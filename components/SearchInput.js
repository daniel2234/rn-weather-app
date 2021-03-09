import React from 'react';
import {StyleSheet, TextInput, View, Text} from 'react-native';

export default class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChangeText = text => {
    //we need to do something text
    this.setState({text: text});
    console.log(text, 'handleChangetext invocation');
  }


  handleSubmitEditing = () => {
    const { onSubmit } = this.props;
    const { text } = this.state;

    if(!text) return;
    //callback function that is a prop that gets invoked once the the TextInput gets submitted
    onSubmit(text);
    this.setState({text: ''});
  }

  render() {
    // console.log(this.props.placeholder, 'SearchInput context');
    const { placeholder } = this.props;
    const { text } = this.state;
    return(
      <View style= {styles.container}>
        <TextInput 
          autoCorrect={false}
          value={text}
          placeholder={placeholder}
          placeholderTextColor="white"
          underlineColorAndroid="transparent"
          style={styles.textInput}
          clearButtonMode="always"
          onChangeText={this.handleChangeText}
          onSubmitEditing={this.handleSubmitEditing}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 10,
    paddingHorizontal:10,
    alignSelf:'center',
    borderRadius: 5,
  },
  textInput: {
    flex: 1,
    color: 'white',
  }
})