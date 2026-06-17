import React from 'react'
import Listing from './Listing'

const RecentListing = ({ listings }) => {
  return (
    <div className='grid gap-5 grid-cols-2 px-[30px] lg:grid-cols-3 lg:px-[200px] items-stretch'>
      {listings.map((listing) => (
        <Listing key={listing._id} listing={listing} />
      ))}
    </div>
  )
}

export default RecentListing
