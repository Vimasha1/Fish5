import React, { useState } from 'react';
import axios from 'axios';
import { message } from 'antd';
import Header from '../../Header';
import SideNav from '../../SideNav';
import Footer from '../../Footer';
import SupplierNav from './SupplierNav';

const SupplierRegister = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    itemCategory: '',
    deliveryType: 'Delivery by Supplier', // Default value for delivery type
    email: '',
    phone: '',
    address: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { name, companyName, itemCategory, deliveryType, email, phone, address } = formData;

      // Make a POST request to register the supplier
      const response = await axios.post('http://localhost:5005/api/suppliers', {
        name,
        companyName,
        itemCategory,
        deliveryType,
        contactInfo: { email, phone },
        address,
      });

      message.success(response.data.message);

      // Clear the form after successful submission
      setFormData({
        name: '',
        companyName: '',
        itemCategory: '',
        deliveryType: 'Delivery by Supplier',
        email: '',
        phone: '',
        address: '',
      });
    } catch (error) {
      console.error('Error registering supplier:', error);
      message.error('Failed to register supplier. Please try again.');
    }
  };

  return (
    <div className="flex">
      <SideNav /> {/* Side Navigation */}

      <div className="ml-56 flex-grow flex flex-col min-h-screen bg-gradient-to-r from-blue-50 to-white">
        <Header /> {/* Header Component */}
        <SupplierNav /> {/* Supplier Navigation */}

        {/* Supplier Registration Section */}
        <section className="p-8 max-w-6xl mx-auto">
          <h1 className="text-4xl font-extrabold text-blue-700 mb-10">Register New Supplier</h1>

          <div className="bg-white p-6 rounded-lg shadow-lg mb-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Supplier Name */}
              <div>
                <label className="block text-lg font-medium text-gray-700">Supplier Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                  placeholder="Enter supplier name"
                />
              </div>

              {/* Company Name and Item Category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700">Company Name</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                    placeholder="Enter company name"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">Type of Fish Offered</label>
                  <input
                    type="text"
                    name="itemCategory"
                    value={formData.itemCategory}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                    placeholder="Enter item category"
                  />
                </div>
              </div>

              {/* Delivery Type */}
              <div>
                <label className="block text-lg font-medium text-gray-700">Delivery Type</label>
                <select
                  name="deliveryType"
                  value={formData.deliveryType}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                >
                  <option value="Delivery by Supplier">Delivery by Supplier</option>
                  <option value="Pickup by Us">Pickup by Us</option>
                </select>
              </div>

              {/* Contact Info: Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-lg font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                    placeholder="Enter supplier email"
                  />
                </div>
                <div>
                  <label className="block text-lg font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    required
                    placeholder="Enter supplier phone number"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <label className="block text-lg font-medium text-gray-700">Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                  placeholder="Enter supplier address"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Register Supplier
              </button>
            </form>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default SupplierRegister;
