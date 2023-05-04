import { StyleSheet, Text, View } from 'react-native';
//import HomeScreen from './screens/Home';
//import IssLocation from './screens/IssLocation';
import MeteorsScreen from './screens/Meteor';


export default function App () {
  return (
    <View style={styles.container}>
      <MeteorsScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
