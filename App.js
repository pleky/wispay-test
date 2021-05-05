import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { rootNavigator } from 'navigators';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="List"
        screenOptions={{
          headerStyle: {
            elevation: 0,
          },
        }}>
        {rootNavigator.map((nav, idx) => (
          <Stack.Screen
            key={idx}
            name={nav.name}
            component={nav.component}
            options={nav.options}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
