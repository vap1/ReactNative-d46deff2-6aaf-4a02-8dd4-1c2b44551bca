
import { SearchRequest, SearchResponse } from '../types/UserTypes';

export const search = async (keyword: string): Promise<SearchResponse> => {
  try {
    const response = await fetch(`/search/${keyword}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch search results');
    }

    const data: SearchResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Search API error: ${error.message}`);
  }
};