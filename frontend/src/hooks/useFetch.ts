import { useState, useEffect } from 'react';
import axios, { type AxiosRequestConfig } from 'axios';

export function useFetch<T = unknown>(url: string, config?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get<T>(url, config);
        if (isMounted) setData(response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        if (isMounted) setError(err.message || 'Error fetching data');
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url, config]);

  return { data, loading, error };
}
