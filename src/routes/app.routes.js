import Dashboard from '../screens/Dashboard';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Dashboard" component={Dashboard} />
  </AppStack.Navigator>
);

export default AppRoutes;
