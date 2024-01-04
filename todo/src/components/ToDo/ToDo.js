import React, {useState} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './ToDo.styles';

const ToDo = () => {
  const [inputValue, setInputValue] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="ToDo..."
        placeholderTextColor="#808080"
        style={styles.textInput}
        value={inputValue}
        onChangeText={text => setInputValue(text)}
      />
      <TouchableOpacity
        style={inputValue === '' ? styles.todoButton : styles.stodoButton}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDo;
