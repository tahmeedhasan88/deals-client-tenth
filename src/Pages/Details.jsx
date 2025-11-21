import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router";
import { useParams } from "react-router";
import { Link } from "react-router";

const Details = () => {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { id } = useParams();

  const [pet, setPet] = useState({});
  const { _id, email} = pet;

  const orderModalRef = useRef(null);

  useEffect(() => {
    if (!data) return;

    const petDetails = Array.isArray(data)
      ? data.find((single) => single._id == id)
      : null;

    setPet(petDetails);
  }, [data, id]);

  const handleOrderModal = () => {
    orderModalRef.current?.showModal();
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const buyerEmail = form.email.value;
    const buyerName = form.name.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const address = form.address.value;
    const date = form.date.value;
    const phone = form.number.value;
    const note = form.opinion.value;

    const newOrders = {
      productId: _id,
      productName,
      buyerName,
      email: buyerEmail,
      quantity,
      price,
      address,
      phone,
      date,
      additionalNotes: note,
    };

    fetch("https://deals-server-tenth.vercel.app/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newOrders),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          orderModalRef.current.close();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your order has been placed",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

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
                Email: <span className="font-medium">{email}</span>
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

            <button
              onClick={handleOrderModal}
              className="w-full bg-gradient-to-r from-green-600 to-[#388E3C] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
            >
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

      {/* Modal */}
      <dialog ref={orderModalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Order Now</h3>
          <p className="py-4">Give Your Order Details</p>

          <form onSubmit={handleOrderSubmit}>
            <fieldset className="space-y-3 w-full max-w-sm mx-auto">
              <label className="block text-sm font-medium">Listing Name</label>
              <input
                type="text"
                name="productName"
                readOnly
                defaultValue={pet?.name}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />

              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                readOnly
                defaultValue={user?.displayName}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />

              <label className="block text-sm font-medium">Email</label>
              <input
                type="text"
                name="email"
                readOnly
                defaultValue={user?.email}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />

              <label className="block text-sm font-medium">Price</label>
              <input
                type="number"
                name="price"
                defaultValue={pet?.price}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />

              <label className="block text-sm font-medium">Quantity</label>
              <input
                type="number"
                name="quantity"
                placeholder="Quantity of Product"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />

              <label className="block text-sm font-medium">Your Address</label>
              <input
                type="text"
                name="address"
                placeholder="Present Address"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />

              <label className="block text-sm font-medium">Date</label>
              <input
                type="date"
                name="date"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />

              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="number"
                name="number"
                placeholder="Your Phone Number"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />

              <label className="block text-sm font-medium">Note</label>
              <input
                type="text"
                name="opinion"
                placeholder="You can write something"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />

              <button className="w-full bg-[#388E3C] text-white py-2 rounded-lg font-semibold hover:opacity-90 transition">
                Order Submit
              </button>
            </fieldset>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Details;
