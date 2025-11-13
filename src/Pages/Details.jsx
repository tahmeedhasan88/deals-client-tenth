import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router';
import { useParams } from 'react-router';

import { useLoaderData } from 'react-router';

const Details = () => {

 const data = useLoaderData();
 const {id} = useParams();
const [pet, setPet] = useState({})

//  console.log(data, id, pet)

useEffect(()=>{
const petDetails = data.find((singleDetails)=>singleDetails._id == id)
setPet(petDetails)

},[data, id])


    return (
        <div>
            

<div className="max-w-5xl mx-auto px-6 py-8 bg-white rounded-2xl shadow-md">
      {/* Back link */}
      <Link
        to="/"
        className="text-sm text-[#388E3C] font-semibold hover:underline flex items-center mb-4"
      >
        ← Back To Products
      </Link>

      <div className="grid md:grid-cols-2 gap-8">

        <div className="flex justify-center items-center border rounded-xl bg-gray-100">
          <img
            src={pet?.image}
            alt={pet?.name}
            className="w-full max-w-sm rounded-xl object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2 text-gray-900">
            {pet?.name}
          </h2>
          <p className="text-sm text-gray-500 mb-2">{pet?.category}</p>
          <p className="text-green-600 text-lg font-bold mb-4">
            ${pet?.price}
          </p>

          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="text-md font-semibold text-gray-800 mb-2">
              Product Details
            </h3>
            <p className="text-sm text-gray-600">
              Product ID: <span className="font-medium">{pet?._id}</span>
            </p>
            <p className="text-sm text-gray-600">
              Posted on: <span className="font-medium">{pet?.date}</span>
            </p>
          </div>

          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h3 className="text-md font-semibold text-gray-800 mb-2">
              Seller Information
            </h3>
            <p className="text-sm text-gray-600">
              Email: <span className="font-medium">{pet?.email}</span>
            </p>
            <p className="text-sm text-gray-600">
              Location: <span className="font-medium">{pet?.location}</span>
            </p>
            <p className="text-sm text-gray-600">
              Status:{" "}
              <span className="inline-block bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">
                Active
              </span>
            </p>
          </div>

          <button className="w-full bg-gradient-to-r from-green-600 to-[#388E3C] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
  I Want Buy This Product
           </button>

        </div>
      </div>

      <div className="mt-10 bg-gray-50 p-5 rounded-xl">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          Product Description
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          {pet?.description}
        </p>
      </div>
    </div>






        </div>
    );
};

export default Details;