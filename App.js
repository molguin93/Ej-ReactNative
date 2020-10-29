import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import axios from 'axios';
  
export default class App extends Component {
  
  state = {
    response: [],
    estado: false
  }

  handlerText(texto){
    var campoTexto = texto;
    this.setState({value: campoTexto});
  }

  handlerButton = () => {
    var civilization = this.state.value;   

    axios.get('https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/' + civilization).then( civ => {
      
        this.setState({
          response: civ.data,
          estado: true
        })
    });
  }

  render() {
    if(this.state.estado != true){
      return (
        <View style={styles.container}>
          <Image
              style={styles.logo}
              source={require('./img/Age_of_Empires_2.png')}
          />
          <Text 
              style={styles.text}
              >Indicar Civilización por nombre o ID numérico
          </Text>
          <TextInput 
              style={styles.input} placeholder='Ej: Persians o 6'
              onChange={this.handlerText.bind(this)}>
          </TextInput>
          <TouchableOpacity
              style={styles.button}
              onPress={this.handlerButton.bind(this)}>
              <Text>Click me</Text> 
          </TouchableOpacity>
          <StatusBar style="auto" />
        </View>
      );
    }else{
      return (
        <View style={styles.container}>
          <Image
              style={styles.logo}
              source={require('./img/Age_of_Empires_2.png')}
          />
          <Text 
              style={styles.text}
              >Indicar Civilización por nombre o ID numérico
          </Text>
          <TextInput 
              style={styles.input} placeholder='Ej: Persians o 6'
              onChange={this.handlerText.bind(this)}>
          </TextInput>
          <TouchableOpacity
              style={styles.button}
              onPress={this.handlerButton.bind(this)}>
              <Text>Click me</Text> 
          </TouchableOpacity>
          <Text 
              style={styles.text}
              >Civilization: {this.state.response.name}
          </Text>
          <Text 
              style={styles.text}
              >Army Type: {this.state.response.army_type}
          </Text>
          <Text 
              style={styles.text}
              >Expansion: {this.state.response.expansion}
          </Text>
          <Text 
              style={styles.text}
              >Team Bonus: {this.state.response.team_bonus}
          </Text>
          <StatusBar style="auto" />
        </View>
      );
    }  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#484848',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: "white",
  },
  logo: {
    height: 150,
    width: 220,
    marginBottom: 40,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ff9d23",
    padding: 10,
    borderRadius: 5,
  },
  input: { 
    height: 40,
    width: 300,
    margin: 10,
    padding: 8,
    borderRadius: 10,	
    borderColor: '#ff9d23',
    backgroundColor: 'white', 
    borderWidth: 3, 
  }, 
});


