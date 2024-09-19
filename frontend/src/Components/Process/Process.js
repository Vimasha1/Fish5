import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Process.css';

const ComplaintProcess = () => {
    const [searchId, setSearchId] = useState('');
    const [complaints, setComplaints] = useState([]);
    const [filteredComplaints, setFilteredComplaints] = useState([]);
    const [selectedComplaint, setSelectedComplaint] = useState(null);

    useEffect(() => {
        fetchComplaints();
    }, []);

    const fetchComplaints = async () => {
        try {
            const response = await axios.get('http://localhost:5000/complaints');
            setComplaints(response.data);
        } catch (error) {
            console.error('Error fetching complaints:', error);
        }
    };

    const handleSearch = () => {
        const trimmedSearchId = searchId.trim().toLowerCase();
        if (trimmedSearchId === '') {
            setFilteredComplaints([]);
            return;
        }

        const result = complaints.filter(complaint =>
            complaint.complaintId.toLowerCase() === trimmedSearchId
        );

        setFilteredComplaints(result.length ? result : []);
    };

    const viewDetails = (complaint) => {
        setSelectedComplaint(complaint);
    };

    return (
        <div className="process-container">
            <h2>Complaint Tracking</h2>

            {/* Search by Complaint ID */}
            <div className="header-container">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Search Complaint ID"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </div>

            {/* Display Filtered Complaints */}
            <div className="complaint-list">
                {filteredComplaints.length ? (
                    filteredComplaints.map(complaint => (
                        <div key={complaint.complaintId} className="complaint-card">
                            <p><strong>Complaint ID:</strong> {complaint.complaintId}</p>
                            <p><strong>Name:</strong> {complaint.name}</p>
                            <p><strong>Description:</strong> {complaint.description}</p>
                            <p><strong>Status:</strong> {complaint.status}</p>
                            <button onClick={() => viewDetails(complaint)}>View Details</button>
                        </div>
                    ))
                ) : (
                    <p>No complaints found</p>
                )}
            </div>

            {/* Display Complaint Details Modal */}
            {selectedComplaint && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Complaint Details</h2>
                        <p><strong>Complaint ID:</strong> {selectedComplaint.complaintId}</p>
                        <p><strong>Date and Time of Complaint:</strong> {new Date(selectedComplaint.createdAt).toLocaleString()}</p>
                        <p><strong>Name of Complainant:</strong> {selectedComplaint.name}</p>
                        <p><strong>Description:</strong> {selectedComplaint.description}</p>
                        <p><strong>Status:</strong> {selectedComplaint.status}</p>
                        <button onClick={() => setSelectedComplaint(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ComplaintProcess;
