import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard/index';
import Details from '../pages/Details/index';

const Stack = createStackNavigator();

const routes: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#c5c5c5'},
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};

export default routes;
