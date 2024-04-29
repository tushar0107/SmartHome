import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Header } from './src/components/Header';
import { Home } from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoomView } from './src/pages/RoomView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Header/>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{title:'Welcome'}}/>
        <Stack.Screen name='Room' component={RoomView} options={{title:'Room View'}}/>
      </Stack.Navigator>
      <StatusBar style="default" hidden={false} backgroundColor='#fff' translucent={false}/>
    </NavigationContainer>
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
