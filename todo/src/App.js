import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ToDo from './components/ToDo';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.first_container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.number}>0</Text>
      </View>
      <ToDo />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  first_container: {
    color: '#FFA500',
    marginTop: 35,
    marginLeft: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    color: '#FFA500',
    fontSize: 50,
    fontWeight: 'bold',
  },
  number: {
    color: '#FFA500',
    fontSize: 50,
    fontWeight: 'bold',
    marginLeft: 20,
  },
});
