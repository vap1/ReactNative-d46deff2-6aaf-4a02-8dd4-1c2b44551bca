
import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { User } from '../types/UserTypes';
import { DataInputRequest } from '../apis/DataInputApi';

interface DataInputFormProps {
  onSubmit: (data: DataInputRequest) => void;
}

const DataInputForm: React.FC<DataInputFormProps> = ({ onSubmit }) => {
  const [user, setUser] = useState<User>({
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (key: keyof User, value: string) => {
    setUser((prevUser) => ({
      ...prevUser,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const data: DataInputRequest = {
        user: user,
      };
      onSubmit(data);
    } else {
      Alert.alert('Error', 'Please fill in all the required fields.');
    }
  };

  const validateForm = () => {
    return (
      user.userId !== '' &&
      user.firstName !== '' &&
      user.lastName !== '' &&
      user.email !== '' &&
      user.phone !== '' &&
      user.address !== ''
    );
  };

  return (
    <View>
      <TextInput
        placeholder="User ID"
        value={user.userId}
        onChangeText={(value) => handleInputChange('userId', value)}
      />
      <TextInput
        placeholder="First Name"
        value={user.firstName}
        onChangeText={(value) => handleInputChange('firstName', value)}
      />
      <TextInput
        placeholder="Last Name"
        value={user.lastName}
        onChangeText={(value) => handleInputChange('lastName', value)}
      />
      <TextInput
        placeholder="Email"
        value={user.email}
        onChangeText={(value) => handleInputChange('email', value)}
      />
      <TextInput
        placeholder="Phone"
        value={user.phone}
        onChangeText={(value) => handleInputChange('phone', value)}
      />
      <TextInput
        placeholder="Address"
        value={user.address}
        onChangeText={(value) => handleInputChange('address', value)}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default DataInputForm;