import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ToDo from './components/ToDo';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = task => {
    setTasks([...tasks, {id: Date.now().toString(), text: task}]);
  };

  const renderItem = ({item}) => (
    <View style={styles.taskItem}>
      <Text>{item.text}</Text>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.first_container}>
        <Text style={styles.title}>ToDo List</Text>
        <Text style={styles.number}>0</Text>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
      <ToDo onAddTask={handleAddTask} />
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
    justifyContent: 'space-between',
    marginRight: 10,
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
