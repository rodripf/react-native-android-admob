/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {NativeModules,TouchableNativeFeedback,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  
} = React;

var AdView = require('./AndroidAdMobView');

var Button = React.createClass({
    pressed: function(){
        this.props.onPress();
    },
    render: function() {

        return (
            <TouchableNativeFeedback
                onPress={this.pressed}
                background={TouchableNativeFeedback.SelectableBackground()}>
                {this.props.renderContent()}
            </TouchableNativeFeedback>
        );
    }
});

var MainMenuButton = React.createClass({
    pressed: function(){
        this.props.onPress(this.props.instrID);
    },
    renderContent : function(){
        return(
            <View style={styles.mainMenuButton}>
                <Text>"Recargar"</Text>
            </View>
        );
    },

    render: function() {
        return (
            <Button renderContent={this.renderContent} onPress={this.pressed}></Button>
        );
    }
});


//at render

var admob = React.createClass({
  refresh: function(){
    this.setState({
                    refreshed: "true"
                });
  },
getInitialState: function() {
  return {
                    refreshed: "false"
                };
},
  render: function() {
    
    var r = NativeModules.ToastRo;
    r.show('Awesome', r.SHORT);

    return (
      <View >
        <MainMenuButton onPress={this.refresh}></MainMenuButton>
        <AdView src={this.state.refreshed} style={styles.ad} text="foo" />
<MainMenuButton onPress={this.refresh}></MainMenuButton>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  mainMenuButton:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 300,
        backgroundColor: 'white'
    },
    ad:{
      width: 320,
      height:100
    }
});

AppRegistry.registerComponent('admob', () => admob);
