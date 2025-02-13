import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, Alert } from 'react-native';
import axios from 'axios';

export default function TransactionsScreen({ navigation }) {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = () => {
    axios.get('http://172.20.10.2:3001/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => {
        console.error(error);
        Alert.alert('Error', 'Unable to fetch transactions.');
      });
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchTransactions);
    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{ padding: 20 }}>
      <Button title="Add Transaction" onPress={() => navigation.navigate('AddTransactions')} />
      <FlatList
        data={transactions}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>Date: {item.date}</Text>
            <Text>Amount: ${item.amount}</Text>
            <Text>Description: {item.description}</Text>
          </View>
        )}
      />
    </View>
  );
}
