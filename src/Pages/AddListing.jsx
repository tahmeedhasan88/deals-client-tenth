import React from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AddListing = () => {
  const handleListingSubmit = async (event) => {
    event.preventDefault()

    const form = event.target
    const newProducts = {
      name: form.productName.value,
      category: form.category.value,
      price: form.price.value,
      location: form.address.value,
      email: form.email.value,
      phone: form.number.value,
      description: form.description.value,
      image: form.image.value,
      date: form.date.value,
    }

    try {
      const response = await fetch('https://deals-server-tenth.vercel.app/products', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(newProducts),
      })
      const data = await response.json()

      toast.success('Product added successfully!')
      form.reset()
    } catch (error) {
      console.error('Error adding product:', error)
      toast.error('Failed to add product.')
    }
  }

  return (
    <div>
      <form onSubmit={handleListingSubmit}>
        <fieldset className='space-y-3 w-full max-w-sm mx-auto bg-white p-10 my-10 rounded-[10px]'>
          <label className='block text-sm font-medium'>Listing Name</label>
          <input
            type='text'
            name='productName'
            className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500'
            placeholder='Product Name'
            required
          />

          <label className='block text-sm font-medium'>Category</label>
          <input
            type='text'
            name='category'
            className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500'
            placeholder='Category'
            required
          />

          <label className='block text-sm font-medium'>Price</label>
          <input
            type='number'
            name='price'
            className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500'
            placeholder='Price of Product'
            required
          />

          <label className='block text-sm font-medium'>Image URL</label>
          <input
            type='url'
            name='image'
            className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500'
            placeholder='Image URL'
            required
          />

          <label className='block text-sm font-medium'>Your Address</label>
          <input
            type='text'
            name='address'
            className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500'
            placeholder='Present Address'
            required
          />

          <label className='block text-sm font-medium'>Email Address</label>
          <input
            type='email'
            name='email'
            className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500'
            placeholder='Enter Your Email'
            required
          />

          <label className='block text-sm font-medium'>Phone Number</label>
          <input
            type='tel'
            name='number'
            className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500'
            placeholder='Your Phone Number'
            required
          />

          <label className='block text-sm font-medium'>Date</label>
          <input
            type='date'
            name='date'
            className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500'
            required
          />

          <label className='block text-sm font-medium'>Description</label>
          <textarea
            name='description'
            className='w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500'
            placeholder='Product Description'
            required
          />

          <button className='w-full bg-[#388E3C] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition'>
            Submit
          </button>
        </fieldset>
      </form>

      <ToastContainer position='top-center' autoClose={3000} />
    </div>
  )
}

export default AddListing
