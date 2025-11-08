// src/tests/useAuth.test.tsx
import { renderHook, act } from '@testing-library/react';
import { useAuth } from '../hooks/useAuth';
import axios from 'axios';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

interface RegisterResponse {
  token: string;
  id: number;
  username: string;
}

describe('useAuth hook', () => {
  it('should handle register', async () => {
    const fakeResponse = {
      data: { token: 'fake-token', id: 1, username: 'test' },
      status: 200,
      statusText: 'OK',
      headers: {},
      config: { url: '', method: 'post' },
    };

    mockedAxios.post.mockResolvedValueOnce(fakeResponse);

    const { result } = renderHook(() => useAuth());

    await act(async () => {
      const res = await result.current.handleRegister({
        username: 'test',
        password: '123456',
        email: 'test@test.com',
      });
      expect(res).toEqual(fakeResponse.data);
    });
  });
});
