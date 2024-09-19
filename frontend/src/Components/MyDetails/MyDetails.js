import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AllMembers = () => {
  const [members, setMembers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/community-members');
        setMembers(response.data);
      } catch (error) {
        console.error('Error fetching community members', error);
      }
    };

    fetchMembers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/community-members/${id}`);
      setMembers(members.filter((member) => member._id !== id));
    } catch (error) {
      console.error('Error deleting community member', error);
    }
  };

  const handleUpdate = (id) => {
    navigate(`/update-member/${id}`);
  };

  const handleBack = () => {
    navigate('/userpage');
  };

  return (
    <div className=" min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <button
          onClick={handleBack}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg mb-6 hover:bg-gray-700 transition duration-200"
        >
          Back
        </button>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Community Members</h2>
        {members.length === 0 ? (
          <div className="text-center text-gray-600">No community members found.</div>
        ) : (
          <ul className="space-y-6">
            {members.map((member) => (
              <li
                key={member._id}
                className="border border-gray-200 p-6 rounded-lg shadow-md bg-gray-50"
              >
                <p className="text-lg font-semibold text-gray-700">
                  <strong>Name:</strong> {member.name}
                </p>
                <p className="text-gray-600">
                  <strong>Address:</strong> {member.address}
                </p>
                <p className="text-gray-600">
                  <strong>Mobile Number:</strong> {member.mobileNumber}
                </p>
                <p className="text-gray-600">
                  <strong>Email:</strong> {member.email}
                </p>
                <p className="text-gray-600">
                  <strong>Username:</strong> {member.username}
                </p>
                <div className="flex space-x-4 mt-6">
                  <button
                    onClick={() => handleUpdate(member._id)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(member._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default AllMembers;
