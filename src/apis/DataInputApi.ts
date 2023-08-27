
import { User } from '../types/UserTypes';

export interface DataInputRequest {
  user: User;
}

export interface DataInputResponse {
  // Define the response structure here
}

export async function dataInputApi(request: DataInputRequest): Promise<DataInputResponse> {
  try {
    const response = await fetch('/data-input', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      throw new Error('API request failed');
    }

    const data: DataInputResponse = await response.json();
    return data;
  } catch (error) {
    throw new Error('API request failed');
  }
}