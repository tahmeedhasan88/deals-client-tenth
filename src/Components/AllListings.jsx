import React from 'react'
import AllListing from './AllListing'

const AllListings = ({ products }) => {
  return (
    <div className='grid gap-5 grid-cols-2 px-[30px] lg:grid-cols-3 lg:px-[200px] items-stretch'>
      {products.map((product) => (
        <AllListing key={product._id} listingData={product} />
      ))}
    </div>
  )
}

export default AllListings
