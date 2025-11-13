

const AddListing = () => {



const handleListingSubmit = (e) =>{
    e.preventDefault();
  const form = e.target;
  const productName = form.productName.value;
  const category = form.category.value;
  const price = form.price.value;
  const email = form.email.value;
  const image= form.image.value;
  const address = form.address.value;
  const date = form.date.value;
  const description = form.description.value;


const newProducts = {
  
  name: productName,
  category: category,
  price: price,
  location: address,
  email: email,
  description: description,
  image: image,
  date: date,
  
}
fetch('http://localhost:3000/products',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body: JSON.stringify(newProducts)
})
.then(res => res.json())
  .then(data => {
    console.log('Product added successfully:', data);
  })
  .catch(error => {
    console.error('Error adding product:', error);
  });

}



    return (
        <div>
            

<form onSubmit={handleListingSubmit}>
    <fieldset className="space-y-3 w-full max-w-sm mx-auto bg-white p-4 my-10">
  <label className="block text-sm font-medium">Listing Name</label>
  <input 
    type="text" 
    name='productName'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    
    placeholder='Product Name' 
  />

  <label className="block text-sm font-medium">Category</label>
  <input 
    type="text"
    name='category' 
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    placeholder='Category'
    
  />

  <label className="block text-sm font-medium">Price</label>
  <input 
    type="number" 
    name='price'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    placeholder="Price of Product" 
  />

  <label className="block text-sm font-medium">Image URL</label>
  <input 
    type="text" 
    name='image'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    placeholder="Url" 
  />

  <label className="block text-sm font-medium">Your Address</label>
  <input 
    type="text" 
    name='address'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    placeholder="Present Address" 
  />
<label className="block text-sm font-medium">Email Address</label>
  <input 
    type="email" 
    name='email'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    placeholder="Enter Your Email" 
  />

  <label className="block text-sm font-medium">Phone Number</label>
  <input 
    type="number" 
    name='number'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    placeholder="Your Phone Number" 
  />
  <label className="block text-sm font-medium">Date</label>
  <input 
    type="date" 
    name='date'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    placeholder="Order Date" 
  />
  <label className="block text-sm font-medium">Description</label>
  <input 
    type="text" 
    name='description'
    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" 
    placeholder="Product Description" 
  />

  <button className="w-full bg-[#388E3C] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
    Submit
  </button>
</fieldset>
</form>





        </div>
    );
};

export default AddListing;