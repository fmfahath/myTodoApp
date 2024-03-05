import { ScrollView, StyleSheet, Text, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { useState } from 'react';


export default function App() {


  const [todoList, setTodoList] = useState([
    { id: 1, title: "React Native", isCompleted: true },
    { id: 2, title: "Laravel", isCompleted: false },
    { id: 3, title: "Node JS", isCompleted: true },
    { id: 4, title: "AWS", isCompleted: false },
    { id: 5, title: "PHP", isCompleted: true },
    { id: 6, title: "Next JS", isCompleted: true },
  ]);

  // get active tab from footer
  const [activeTab, setActiveTab] = useState("all");

  const changeActiveTab = (tabValue) => {
    setActiveTab(tabValue);
  }

  // check / uncheck function
  const updateTodo = (todoItem) => {
    const copyTodoList = [...todoList];
    const index = copyTodoList.findIndex((item) => item.id == todoItem.id);
    const updatedTodoItem = { ...todoItem, isCompleted: !todoItem.isCompleted };
    copyTodoList[index] = updatedTodoItem;
    setTodoList(copyTodoList);
  }

  // filter & render todolist (footer function)
  const filteredList = () => {
    if (activeTab == "all") {
      return todoList;
    }
    else if (activeTab == "inProgress") {
      return todoList.filter(item => item.isCompleted == false);
    }
    else if (activeTab == "completed") {
      return todoList.filter(item => item.isCompleted == true);
    }
  }

  // long press delete todo item
  const deleteItem = (todoItem) => {
    const remainingData = todoList.filter(item => item.id !== todoItem.id);
    setTodoList(remainingData);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.card}>
        <ScrollView>
          {filteredList().map((item) => <Card key={item.id} todoItem={item} updateTodo={updateTodo} deleteItem={deleteItem} />)}
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Footer activeTab={activeTab} changeActiveTab={changeActiveTab} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#27272a',
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },

  header: {
    height: 80,
    marginTop: 20,
  },
  card: {
    flex: 1,
    paddingTop: 20,
    // backgroundColor: '#10b981'
  },
  footer: {
    // backgroundColor: '#d9f99d',
    height: 70,
  }
});
