import { useState, useCallback } from 'react'

export function useFetch(service, options = {}) {
  const { refresh, data } = options
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [resData, setData] = useState(data || null)
  const [query, setQuery] = useState()

  const fetch = useCallback(
    async function (...arg) {
      if (!service) return
      setError(null)
      setLoading(true)
      setQuery(arg[0])
      refresh && setData(data || null)
      try {
        const res = await service(...arg)
        setData(res)
        setLoading(false)
        return res
      } catch (error) {
        setError(error.toString())
        setLoading(false)

        if (typeof error === 'object') {
          throw new Error(JSON.stringify(error)).toString()
        }
        throw new Error(error).toString()
      }
    },
    [service, data, refresh]
  )

  return [{ error, loading, data: resData, query }, fetch]
}

export default useFetch
