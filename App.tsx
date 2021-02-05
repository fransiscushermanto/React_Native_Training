/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import UserRate from './UserRate';

const App = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <View style={styles.statusBar} />
      <View style={styles.container}>
        {!show ? (
          <TouchableOpacity style={styles.button} onPress={() => setShow(true)}>
            <Text style={styles.buttonText}>Show Dialog</Text>
          </TouchableOpacity>
        ) : (
          <UserRate show={show} setShow={setShow} />
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    height: StatusBar.currentHeight,
    backgroundColor: 'transparent',
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  button: {
    width: '100%',
    backgroundColor: '#30A6FF',
    paddingVertical: 14.5,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontFamily: 'Exo2-Bold',
    fontSize: 17,
  },
});

export default App;
