import * as React from 'react';
import {List} from './List/List';
import {Details} from './Details/Details';
import {componentWithNoHeader} from '../styles/HeaderComponents';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const Screens: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false, gestureEnabled: false}}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
