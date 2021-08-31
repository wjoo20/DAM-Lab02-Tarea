import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textValue: '',
      count: 0,
    };
  }

  changeTextInput = text => {
    this.setState({
      textValue: text
    });
  };

  render(){
    return (
      <View style = {styles.container}>
        
        <Image source = {require('./assets/logo.png')} style = {styles.image}/>
        <View>
          <Text>Usuario: </Text>
          <TextInput 
            style = {styles.text}
            onChangeText = {text => this.changeTextInput(text)}
            value = {this.state.textValue}
          />

          <Text>Contraseña: </Text>
          <TextInput 
            style = {styles.text}
            onChangeText = {text => this.changeTextInput(text)}
            value = {this.state.textValue}
          />
        </View>       
        <TouchableOpacity style = {styles.button} onPress = {this.onPress}>
          <Text>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  text: {
    width: 280,
    padding: 10,
    height: 40, 
    borderColor: 'gray', 
    borderWidth: 1,
  },

  image: {
    height: 200,
    width: 250,
  },

  button: {
    top: 50,
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});

