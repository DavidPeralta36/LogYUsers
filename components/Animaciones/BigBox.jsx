import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default class BigBox extends React.Component {
  state = {
    w: 10,
    h: 10,
  };

  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15})
  }
  _onPress2 = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w - 15, h: this.state.h - 15})
  }
  _onPress3 = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w = 10, h: this.state.h = 10})
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text} >Altura: {this.state.w}px</Text>
        <Text style={styles.text} >Anchura: {this.state.h}px</Text>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Mas grande!</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPress2}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Mas chiquita</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPress3}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Resetear</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#34054F",
    height:700
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 5,
    marginBottom:25,
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
    borderRadius:5,
    width:170,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  text:{
    color:"white",
    fontSize:20,
    marginBottom:25,
  }
});