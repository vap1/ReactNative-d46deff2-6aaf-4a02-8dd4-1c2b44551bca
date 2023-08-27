
import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { User } from '../types/UserTypes';
import { SearchRequest, SearchResponse } from '../apis/SearchApi';

const SearchScreen: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState<User[]>([]);

  const handleSearch = async () => {
    try {
      const request: SearchRequest = {
        keyword: keyword,
      };

      // Make API call to search for specific information
      const response: SearchResponse = await searchApi(request);

      setSearchResults(response.searchResults);
    } catch (error) {
      console.error('Error searching for information:', error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Enter keyword"
        value={keyword}
        onChangeText={setKeyword}
      />
      <Button title="Search" onPress={handleSearch} />

      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.userId}
        renderItem={({ item }) => (
          <View>
            <Text>{item.firstName} {item.lastName}</Text>
            <Text>{item.email}</Text>
            <Text>{item.phone}</Text>
            <Text>{item.address}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;