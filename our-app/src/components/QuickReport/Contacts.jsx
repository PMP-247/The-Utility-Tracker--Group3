import { useState } from "react";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User contacts submitted:", formData);
    // TODO: send to backend or save in state
  };

  return (
    <section id="contact" className="bg-gray-200 py-12 text-center">
      <h2 className="text-2xl font-bold mb-4">Your Contact Details</h2>

      {/* User contact form */}
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>

      {/* Divider */}
      <div className="my-8 border-t border-gray-400"></div>

      {/* Static company contacts */}
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <p>Email: support@UtilityTracker.com</p>
      <p>Phone: +27 11 123 4567</p>
    </section>
  );
}

