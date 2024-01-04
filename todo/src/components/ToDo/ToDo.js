import React, {useState} from 'react';
import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './ToDo.styles';

const ToDo = ({onAddTask}) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      onAddTask(inputValue);
      setInputValue('');
    }
  };
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
        style={inputValue === '' ? styles.todoButton : styles.stodoButton}
        onPress={handleAddTask}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToDo;
