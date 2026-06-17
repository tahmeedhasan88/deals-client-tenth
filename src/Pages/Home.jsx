import React, { useEffect, useRef, useState } from 'react'
import RecentListing from '../Components/RecentListing'
import Loading from '../Components/Loading'

const Home = () => {
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const carouselRef = useRef(null)

  useEffect(() => {
    let isMounted = true

    const fetchListings = async () => {
      try {
        const response = await fetch('https://deals-server-tenth.vercel.app/recent-listings')
        if (!response.ok) {
          throw new Error('Failed to load listings')
        }
        const data = await response.json()
        if (isMounted) {
          setListings(data)
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    fetchListings()

    return () => {
      isMounted = false
    }
  }, [])

  useEffect(() => {
    const carousel = carouselRef.current
    let scrollAmount = 0

    const slide = () => {
      if (!carousel) return

      const scrollWidth = carousel.scrollWidth
      const visibleWidth = carousel.clientWidth
      scrollAmount += visibleWidth

      if (scrollAmount >= scrollWidth) {
        scrollAmount = 0
      }

      carousel.scrollTo({ left: scrollAmount, behavior: 'smooth' })
    }

    const interval = setInterval(slide, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <div ref={carouselRef} className='carousel rounded-box overflow-x-auto scroll-smooth space-x-2 mt-5'>
        <div className='carousel-item'>
          <img className='h-[150px] lg:h-[300px]' src='/dogcat.jpg' alt='Dog & Cat' />
        </div>
        <div className='carousel-item'>
          <img className='h-[150px] lg:h-[300px]' src='/cat.jpg' alt='A happy baby with cat' />
        </div>
        <div className='carousel-item'>
          <img className='h-[150px] lg:h-[300px]' src='/puppy.jpg' alt='Puppy' />
        </div>
        <div className='carousel-item'>
          <img className='h-[150px] lg:h-[300px]' src='/catwith.JPG' alt='Cat' />
        </div>
        <div className='carousel-item'>
          <img className='h-[150px] lg:h-[300px]' src='/happy.JPG' alt='Happy Owner' />
        </div>
        <div className='carousel-item'>
          <img className='h-[150px] lg:h-[300px]' src='/poorDog.JPG' alt='Poor Dog' />
        </div>
      </div>

      <div className='mt-10 mb-10'>
        <div className='mb-2'>
          <h1 className='font-bold text-[15px] lg:text-[22px] text-center lg:mb-7'>Recent Listing</h1>
        </div>

        {loading ? (
          <Loading />
        ) : error ? (
          <p className='text-center text-red-500'>{error}</p>
        ) : (
          <RecentListing listings={listings} />
        )}
      </div>
    </div>
  )
}

export default Home
