import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';

const navigator = createStackNavigator();

export default function App() {
  return (
    <BlogProvider>
    <NavigationContainer>
      <navigator.Navigator initialRouteName='Index' screenOptions={{title: 'Blog'}}>
        <navigator.Screen name='Index' component={IndexScreen} />
        <navigator.Screen name='Show' component={ShowScreen} />
        <navigator.Screen name='Create' component={CreateScreen} />
      </navigator.Navigator>
    </NavigationContainer> 
    </BlogProvider>
  );
};