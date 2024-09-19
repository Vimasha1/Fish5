import React from 'react';
import { Link } from 'react-router-dom';
import boatOwnerImage from './community.png';
// Import your images here

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-4">
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="">
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img src="path/to/boat-owner-image.jpg" alt="Boat Owner" className="object-cover w-full h-48" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">Boat Owner</h3>
            </div>
          </div>
        </Link>

        <Link to="/">
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img src="path/to/wholesaler-image.jpg" alt="Wholesaler" className="object-cover w-full h-48" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">Wholesaler</h3>
            </div>
          </div>
        </Link>

        <Link to="">
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img src="path/to/treasurer-image.jpg" alt="Treasurer" className="object-cover w-full h-48" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">Treasurer</h3>
            </div>
          </div>
        </Link>
      </div>

      {/* Middle Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="">
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img src="path/to/event-manager-image.jpg" alt="Event Manager" className="object-cover w-full h-48" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">Event Manager</h3>
            </div>
          </div>
        </Link>

        <Link to="">
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img src="path/to/supportive-staff-image.jpg" alt="Supportive Staff" className="object-cover w-full h-48" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">Supportive Staff</h3>
            </div>
          </div>
        </Link>

        <Link to="">
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img src="path/to/fisherman-image.jpg" alt="Fisherman" className="object-cover w-full h-48" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">Fisherman</h3>
            </div>
          </div>
        </Link>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center ml-500">
        <Link to="">
          <div className="">
            <img  />
            <div className="">
              <h3 className=""></h3>
            </div>
          </div>
        </Link>

        <Link to="/userpage">
          <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
            <img src={boatOwnerImage} className="object-cover w-full h-48" alt="Community Member" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">Community Member</h3>
            </div>
          </div>
        </Link>

        <Link to="">
          <div className="">
            <img  />
            <div className="">
              <h3 className=""></h3>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
