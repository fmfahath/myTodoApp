import { ScrollView, StyleSheet, Text, View, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from './components/Card/Card';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header />
      </View>
      <View style={styles.card}>
        <ScrollView>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
      <View style={styles.footer}>
        <Footer />
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
