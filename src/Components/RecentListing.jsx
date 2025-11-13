import React from 'react';
import { use } from 'react';
import Listing from './Listing';

const RecentListing = ({recentListingPromise}) => {

    const listings = use(recentListingPromise)
    

    return (
        <div className="grid gap-5 grid-cols-2 px-[30px] lg:grid-cols-3 lg:px-[200px] items-stretch">
        {
        listings.map(listing=>
            <Listing listing={listing}></Listing>
        )
        
        
        }
        </div>
    );
};

export default RecentListing;
