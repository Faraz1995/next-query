import axios from 'axios'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

const fetcher = async (url) => {
  return await axios.get(url).then((res) => res.data)
}
export const useBeers = () => {
  const url = 'https://api.punkapi.com/v2/beers'
  const queryKey = ['allBeers']
  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    queryKey,
    () => fetcher(url),
    {
      retry: false
    }
  )

  return {
    isLoading,
    isFetching,
    data,
    isError,
    error,
    refetch
  }
}
