
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { DataInputRequest } from '../types/UserTypes';
import { DataInputApi } from '../apis/DataInputApi';

const DataInputScreen: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleDataInput = async () => {
    try {
      const requestData: DataInputRequest = {
        user: {
          firstName,
          lastName,
          email,
          phone,
          address,
        },
      };

      // Make API call to submit data input
      const response = await DataInputApi.dataInput(requestData);

      // Handle success response
      // TODO: Add your logic here

      // Show success message
      Alert.alert('Success', 'Data input submitted successfully');
    } catch (error) {
      // Handle error
      // TODO: Add your error handling logic here

      // Show error message
      Alert.alert('Error', 'Failed to submit data input');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />
      <TextInput
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Phone"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Submit" onPress={handleDataInput} />
    </View>
  );
};

export default DataInputScreen;