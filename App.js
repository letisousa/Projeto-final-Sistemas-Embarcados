import { StyleSheet, Text, View } from 'react-native';
import Bright from './src/components/Bright/Bright';
import Home from './src/components/Pages/Home/Home';
import WebView from './src/components/WebView/WebView';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Rotation from './src/components/Pages/Rotation/Rotation';

const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="WebView" component={WebView} />
          <Stack.Screen name="Bright" component={Bright} />
          <Stack.Screen name="Rotation" component={Rotation} />
        </Stack.Navigator>
      </NavigationContainer>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});