import React from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import styles from './ToDo.styles';

const ToDo = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Yapılacak..."
        placeholderTextColor="#808080"
        style={styles.textInput}
      />
      <Button title="Kaydet" style={styles.button} />
    </View>
  );
};

export default ToDo;
