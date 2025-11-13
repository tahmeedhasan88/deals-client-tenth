import React from "react";
import { Link } from "react-router";

const Listing = ({ listing }) => {

const {_id} = listing;

  return (
    <div>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg">
      {/* Image Section */}
      <img
        src={listing.image}
        alt={listing.name}
        className="w-full h-48 object-cover"
      />

      {/* Content Section */}
      <div className="p-4 text-center">
        <h3 className="lg:text-[17px] font-semibold  text-gray-800">{listing.name}</h3>
        <p className="text-sm text-gray-500 mb-1">{listing.price}</p>
        <p className="text-sm text-gray-400">{listing.location}</p>

        <Link to={`/details/${_id}`}><button className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition">
          See Details
        </button></Link>
      </div>
    </div>
    </div>
  );
};

export default Listing;
