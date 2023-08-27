
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { User } from '../types/UserTypes';
import { search } from '../apis/SearchApi';

type SearchResultsProps = {
  keyword: string;
};

type SearchResultsState = {
  searchResults: User[];
};

class SearchResults extends React.Component<SearchResultsProps, SearchResultsState> {
  constructor(props: SearchResultsProps) {
    super(props);
    this.state = {
      searchResults: [],
    };
  }

  componentDidMount() {
    this.fetchSearchResults();
  }

  fetchSearchResults = async () => {
    try {
      const response = await search(this.props.keyword);
      this.setState({ searchResults: response.searchResults });
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  renderSearchResult = ({ item }: { item: User }) => (
    <View>
      <Text>{item.firstName} {item.lastName}</Text>
      <Text>Email: {item.email}</Text>
      <Text>Phone: {item.phone}</Text>
      <Text>Address: {item.address}</Text>
    </View>
  );

  render() {
    return (
      <View>
        <Text>Search Results for: {this.props.keyword}</Text>
        <FlatList
          data={this.state.searchResults}
          renderItem={this.renderSearchResult}
          keyExtractor={(item) => item.userId}
        />
      </View>
    );
  }
}

export default SearchResults;