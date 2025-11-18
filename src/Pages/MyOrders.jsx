import React, { use, useEffect, useState } from "react";
import jsPDF from "jspdf";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";


const MyOrders = () => {

  const {user} = use(AuthContext)
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user?.email){
      fetch(`http://localhost:3000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
    }
  }, [user?.email]);

  // Delete order
  const handleDelete = (id) => {
  fetch(`http://localhost:3000/orders/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then(() => {
     
      setOrders(orders.filter((order) => order._id !== id));
      Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your order has been removed",
  showConfirmButton: false,
  timer: 1500
});
    });
};


  // Download PDF
  const handlePDF = (order) => {
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Order Details", 20, 20);
    doc.setFontSize(12);

    let y = 40;
    for (let key in order) {
      if (key !== "_id") doc.text(`${key}: ${order[key]}`, 20, y);
      y += 10;
    }

    doc.save(`${order.productName}_order.pdf`);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">#</th>
            <th className="p-2 border">Product Name</th>
            <th className="p-2 border">Quantity</th>
            <th className="p-2 border">Date</th>
            <th className="p-2 border">Buyer Email</th>
            <th className="p-2 border">Price</th>
            <th className="p-2 border">Address</th>
            <th className="p-2 border">Phone</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={order._id} className="text-center border-b">
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{order.productName}</td>
              <td className="p-2 border">{order.quantity}</td>
              <td className="p-2 border">{order.date}</td>
              <td className="p-2 border">{order.email}</td>
              <td className="p-2 border">{order.price}</td>
              <td className="p-2 border">{order.address}</td>
              <td className="p-2 border">{order.phone}</td>
              <td className="p-2 border flex justify-center gap-2">
            <button
            onClick={() => handleDelete(order._id)}
            className="bg-red-500 bg-opacity-50 text-white font-semibold px-2 py-1 rounded"
            >
            Remove
            </button>
                <button
                  onClick={() => handlePDF(order)}
                  className="bg-green-500 text-white font-semibold px-2 py-1 rounded"
                >
                  PDF
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrders;
