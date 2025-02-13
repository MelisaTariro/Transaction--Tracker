import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

export default function LoginScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://172.20.10.2:3001/login', { username, password });
      if (response.data.success) {
        navigation.replace('Transactions'); // Navigate to Transactions screen
      } else {
        Alert.alert('Login Failed', 'Invalid credentials');
      }
    } catch (error) {
      Alert.alert('Error', 'Unable to connect to the server');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Username:</Text>
      <TextInput value={username} onChangeText={setUsername} style={{ borderWidth: 1, padding: 10 }} />
      <Text>Password:</Text>
      <TextInput value={password} onChangeText={setPassword} secureTextEntry style={{ borderWidth: 1, padding: 10 }} />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
