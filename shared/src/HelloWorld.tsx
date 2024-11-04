import { useQuery } from '@tanstack/react-query'
const { hc } = require("hono/dist/client") as typeof import("hono/client");
import { type ApiRoutes } from '@backend/index'
import { View, Text, StyleSheet } from 'react-native';
import config from './utilities/config';
const client = hc<ApiRoutes>(config.apiUrl)

const HelloWorld = () => {
  const query = useQuery({
    queryKey: ['hello'],
    queryFn: async () => {
      const res = await client.api.hello.$get({ query: { name: 'An awesome test' } });
      return await res.json();
    },
  });

  if (query.isLoading) return <Text style={styles.message}>Loading...</Text>;
  if (query.isError) return <Text style={styles.error}>Error: {(query.error as Error).message}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.message}>{query.data?.message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    padding: 16,
  },
  message: {
    fontSize: 18,
    color: '#333',
  },
  error: {
    fontSize: 18,
    color: 'red',
  },
});

export default HelloWorld