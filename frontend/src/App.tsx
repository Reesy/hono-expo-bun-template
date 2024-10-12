import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import HelloWorld from '@shared/src/HelloWorld';
const queryClient = new QueryClient()


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelloWorld />
    </QueryClientProvider>
  )
}
