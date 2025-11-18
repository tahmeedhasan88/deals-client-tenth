import React, { useRef } from 'react';
import { useEffect } from 'react';
import { use } from 'react';
import { useState } from 'react';
import { Link } from 'react-router';
import { useParams } from 'react-router';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Details = () => {

const {user} = use(AuthContext);
 const data = useLoaderData();
 const {id} = useParams();
const [pet, setPet] = useState({})
const {_id, email} = pet;


const orderModalRef = useRef(null);

//  console.log(data, id, pet)

useEffect(()=>{
const petDetails = data.find((singleDetails)=>singleDetails._id == id)
setPet(petDetails)

},[data, id])


const handleOrderModal =()=>{
orderModalRef.current?.showModal();
}

const handleOrderSubmit = (e) =>{
    e.preventDefault();
  const form = e.target;
  const productName = form.productName.value;
  const email = form.email.value;
  const name = form.name.value;
  const price = form.price.value;
  const quantity= form.quantity.value;
  const address = form.address.value;
  const date = form.date.value;
  const phone = form.number.value;
  const note = form.opinion.value;
console.log(_id, productName, name, price, quantity, address,date, phone)

const newOrders = {
  productId: _id,
  productName: productName,
  buyerName: name,
  email: email,
  quantity: quantity,
  price: price,
  address: address,
  phone: phone,
  date: date,
  additionalNotes: note,
}
fetch('https://deals-server-tenth.vercel.app/orders',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body: JSON.stringify(newOrders)
})
.then(res=>res.json())
.then(data=>{
    if(data.insertedId){
        orderModalRef.current.close();
        Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your order has been placed",
  showConfirmButton: false,
  timer: 1500
});
    }
})

}


    return (
        <div>
            

<div className="max-w-5xl mx-auto px-6 py-8 bg-white rounded-2xl shadow-md">
     
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

          <button onClick={handleOrderModal} className="w-full bg-gradient-to-r from-green-600 to-[#388E3C] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition">
             I Want To Buy It
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



{/* Modal---------- */}
{/* Open the modal using document.getElementById('ID').showModal() method */}
<dialog ref={orderModalRef} className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Order Now</h3>
    <p className="py-4">Give Your Order Details</p>

<form onSubmit={handleOrderSubmit} >

    <fieldset className="space-y-3 w-full max-w-sm mx-auto">
  <label className="block text-sm font-medium">Listing Name</label>
  <input 
    type="text" 
    name='productName'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    readOnly 
    defaultValue={pet.name} 
  />

  <label className="block text-sm font-medium">Name</label>
  <input 
    type="text" 
    name='name'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    readOnly 
    defaultValue={user.displayName} 
  />
<label className="block text-sm font-medium">Name</label>
  <input 
    type="text" 
    name='email'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    readOnly 
    defaultValue={user.email} 
  />


  <label className="block text-sm font-medium">Price</label>
  <input 
    type="number" 
    name='price'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    defaultValue={pet.price}
  />

  <label className="block text-sm font-medium">Quantity</label>
  <input 
    type="number" 
    name='quantity'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    placeholder="Quantity of Product" 
  />

  <label className="block text-sm font-medium">Your Address</label>
  <input 
    type="text" 
    name='address'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    placeholder="Present Address" 
  />
 <label className="block text-sm font-medium">Date</label>
  <input 
    type="date" 
    name='date'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    placeholder="Order Date" 
  />

  <label className="block text-sm font-medium">Phone Number</label>
  <input 
    type="number" 
    name='number'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    placeholder="Your Phone Number" 
  />
  <label className="block text-sm font-medium">Note</label>
  <input 
    type="text" 
    name='opinion'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    placeholder="You CanWrite Something" 
  />

  <button className="w-full bg-[#388E3C] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
    Order Submit
  </button>
</fieldset>


</form>
    
    <div className="modal-action">
      <form method="dialog">
        
      </form>
    </div>
  </div>
</dialog>




        </div>
    );
};

export default Details;