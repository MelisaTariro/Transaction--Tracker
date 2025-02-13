import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import TransactionsScreen from './screens/TransactionsScreen';
import AddTransactionsScreen from './screens/AddTransactionsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Transactions" component={TransactionsScreen} />
        <Stack.Screen name="AddTransactions" component={AddTransactionsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
