import React, { useEffect, useState } from 'react'

const URL = import.meta.env.VITE_API_URL

const useFetchDAE = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDAE = async () => {
      try {
        setIsLoading(true)
        setError('')
        const response = await fetch(URL)
        if (!response.ok) {
          throw new Error('Something went wrong with fetching movies')
        }
        const data = await response.json()
        setData(data)
        setError('')
      } catch (err) {
        // Pour ignorer l'erreur AbortError qui n'en n'est pas une
        if (err.name === 'AbortError') {
          // console.error(err.message)
          setError(err.message)
        }
      } finally {
        setIsLoading(false)
      }
    }
    fetchDAE()
  }, [])

  return {
    data,
    isLoading,
    error,
  }
}

export default useFetchDAE