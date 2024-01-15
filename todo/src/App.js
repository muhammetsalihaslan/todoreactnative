import React, {useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import ToDo from './components/ToDo';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = task => {
    setTasks([...tasks, {id: tasks.length + 1, text: task, completed: false}]);
  };

  const toggleTodo = id => {
    const updatedTodos = tasks.map(todo =>
      todo.id === id ? {...todo, completed: !todo.completed} : todo,
    );
    setTasks(updatedTodos);
  };

  const renderItem = ({item}) => (
    <Pressable style={styles.taskItem} onPress={() => toggleTodo(item.id)}>
      <Text style={item.completed ? styles.completedTodo : styles.text}>
        {item.text}
      </Text>
    </Pressable>
  );

  const getRemainingTodos = () => tasks.filter(todo => !todo.completed).length;
  return (
    <View style={styles.container}>
      <View style={styles.first_container}>
        <Text style={styles.title}>ToDo List</Text>
        <Text style={styles.number}>{getRemainingTodos()}</Text>
      </View>
      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={styles.flat}
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

  text: {
    color: 'white',
    fontSize: 25,
    backgroundColor: '#7DA453',
    marginTop: 5,
    borderRadius: 8,
    padding: 10,
  },
  completedTodo: {
    textDecorationLine: 'line-through',
    color: 'gray',
    fontSize: 25,
    backgroundColor: '#37474F',
    marginTop: 5,
    borderRadius: 8,
    padding: 10,
  },
  flat: {
    margin: 5,
  },
});
