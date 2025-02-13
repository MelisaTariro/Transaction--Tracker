import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

export default function AddTransactionsScreen({ navigation }) {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async () => {
    if (!date || !amount || !description) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      await axios.post('http://172.20.10.2:3001/transactions', { date,  amount: parseFloat(amount), description });
      Alert.alert('Success', 'Transaction added!');
      navigation.goBack();
    } catch (error) {
      console.log(error.response?.data || error.message);
      Alert.alert('Error', 'Could not add transaction');
    }
  };
 

  return (
    <View style={{ padding: 20 }}>
      <Text>Date:</Text>
      <TextInput value={date} onChangeText={setDate} style={{ borderWidth: 1, padding: 10 }} />
      <Text>Amount:</Text>
      <TextInput value={amount} onChangeText={setAmount} keyboardType="numeric" style={{ borderWidth: 1, padding: 10 }} />
      <Text>Description:</Text>
      <TextInput value={description} onChangeText={setDescription} style={{ borderWidth: 1, padding: 10 }} />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}
