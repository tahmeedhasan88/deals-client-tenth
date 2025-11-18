import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);

  // Fetch user's listings
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/products?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.error(err));
    }
  }, [user?.email]);

  // Delete a listing
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0 || data.message) {
              setProducts(products.filter((p) => p._id !== id));
              Swal.fire("Deleted!", "Your listing has been deleted.", "success");
            }
          })
          .catch((err) => {
            console.error(err);
            Swal.fire("Error!", "Failed to delete listing.", "error");
          });
      }
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl lg:text-2xl font-bold mb-6">My Listings</h1>

      {products.length === 0 && (
        <p className="text-gray-500">No listings found.</p>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p._id}
            className="border rounded-lg shadow-md overflow-hidden relative"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-bold">{p.name}</h2>
              <p className="text-sm text-gray-600">Category: {p.category}</p>
              <p className="text-sm text-gray-600">Price: ${p.price}</p>
              <p className="text-sm text-gray-600">Location: {p.location}</p>
              <p className="text-sm mt-2">{p.description}</p>
              <p className="text-xs text-gray-400 mt-1">Date: {p.date}</p>
            </div>

            <button
              onClick={() => handleDelete(p._id)}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800"
              title="Delete Listing"
            >
              <FaTrash size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyListings;
