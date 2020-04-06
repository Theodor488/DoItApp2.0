import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Picker, } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';
import PickerExample from './components/PickerDrop';


var day = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
var date = month + '/' + day + '/' + year;

export default function App() {
  const [todos, setTodos] = useState([
    { text: date + '\n' + 'Task 3', key: '1', completed: false },
    { text: date + '\n' + 'Task 2', key: '2', completed: false },
    { text: date + '\n' + 'Task 1', key: '3', completed: false }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      var result = [];

      for (var todo of prevTodos) {
        if (todo.key == key) {
          todo.completed = !todo.completed;
        }
        result.push(todo);
      }
      return result
    });
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    })
  }

  return (

    <View style={styles.container}>
      <Header />

      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />

        <View style={styles.list}>

          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem style={item.style} item={item} pressHandler={pressHandler} />
            )}
          />

        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
    marginBottom: 250,
  },

});