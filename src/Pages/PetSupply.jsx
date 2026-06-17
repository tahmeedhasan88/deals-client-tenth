import React, { useEffect, useState } from 'react'
import AllListings from '../Components/AllListings'
import Loading from '../Components/Loading'

const PetSupply = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    const fetchProducts = async () => {
      try {
        const response = await fetch('https://deals-server-tenth.vercel.app/products')
        if (!response.ok) {
          throw new Error('Failed to load products')
        }
        const data = await response.json()
        if (isMounted) setProducts(data)
      } catch (err) {
        if (isMounted) setError(err.message)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchProducts()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <div className='my-10 lg:my-16'>
      {loading ? (
        <Loading />
      ) : error ? (
        <p className='text-center text-red-500'>{error}</p>
      ) : (
        <AllListings products={products} />
      )}
    </div>
  )
}

export default PetSupply
