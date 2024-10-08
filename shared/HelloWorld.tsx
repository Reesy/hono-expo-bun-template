import { useQuery } from '@tanstack/react-query'
import { hc } from 'hono/client'
import { type ApiRoutes } from '@backend/src'

const client = hc<ApiRoutes>('/')

const HelloWorld = () => {
  const query = useQuery({
    queryKey: ['hello'],
    queryFn: async () => {
      const res = await client.api.hello.$get({query: {name: 'An awesome test'}})
      return await res.json()
    },
  })

  if (query.isLoading) return <div>Loading...</div>
  if (query.isError) return <div>Error: {(query.error as Error).message}</div>

  return (
  <>
      <p> This is awesome </p>
     <div>{query.data?.message} </div>
  </>
  )
}

export default HelloWorld