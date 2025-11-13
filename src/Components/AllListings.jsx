import React from 'react';
import { use } from 'react';
import AllListing from './AllListing';

const AllListings = ({allListingApi}) => {

const apiUsing = use(allListingApi)


    return (
        <div className="grid gap-5 grid-cols-2 px-[30px] lg:grid-cols-3 lg:px-[200px] items-stretch">
            {

       apiUsing.map(listingData =><AllListing listingData={listingData}></AllListing>)


            }
        </div>
    );
};

export default AllListings;