import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import Modal from 'react-modal';
import html2canvas from 'html2canvas';
import './ComplaintDetails.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Register the necessary components for Chart.js
Chart.register(ArcElement, Tooltip, Legend);

const Complaints = () => {
    const [complaints, setComplaints] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [filteredComplaints, setFilteredComplaints] = useState([]);
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const [note, setNote] = useState('');
    const [statusFilter, setStatusFilter] = useState('All');
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        fetchComplaints();
    }, []);

    useEffect(() => {
        filterComplaintsByStatus();
    }, [statusFilter, complaints]);

    const fetchComplaints = async () => {
        setLoading(true);
        try {
            const res = await axios.get('http://localhost:5000/complaints');
            setComplaints(res.data || []);
        } catch (err) {
            setError('Failed to fetch complaints');
        } finally {
            setLoading(false);
        }
    };

    const filterComplaintsByStatus = () => {
        setFilteredComplaints(
            statusFilter === 'All'
                ? complaints
                : complaints.filter(complaint => complaint.status === statusFilter)
        );
    };

    const openModal = () => setModalIsOpen(true);
    const closeModal = () => setModalIsOpen(false);

    const downloadGraph = () => {
        const chartCanvas = document.getElementById('complaintPieChart');
        html2canvas(chartCanvas).then(canvas => {
            const link = document.createElement('a');
            link.download = 'complaint_analysis.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    };

    const handleChange = async (id, updates) => {
        try {
            await axios.put(`http://localhost:5000/complaints/${id}`, updates);
            fetchComplaints();
        } catch (err) {
            console.error('Update failed:', err);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/complaints/${id}`);
            fetchComplaints();
        } catch (err) {
            console.error('Delete failed:', err);
        }
    };

    const handleEdit = (complaint) => {
        setSelectedComplaint(complaint);
        setNote(complaint.note || '');
    };

    const handleUpdate = async () => {
        if (!selectedComplaint) return;
        await handleChange(selectedComplaint._id, { note, ...selectedComplaint });
        setSelectedComplaint(null);
    };

    const calculateCategoryDistribution = () => {
        const categoryCounts = complaints.reduce((acc, { category }) => {
            acc[category] = (acc[category] || 0) + 1;
            return acc;
        }, {});

        const labels = ['Finance', 'Sales', 'BoatTrip', 'Employees', 'Event', 'Others'];
        return {
            labels,
            data: labels.map(label => categoryCounts[label] || 0),
        };
    };

    const { labels, data } = calculateCategoryDistribution();
    const pieData = {
        labels,
        datasets: [{ data, backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'] }],
    };

    if (loading) return <div>Loading complaints...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="complaints-container">
            <h1>Received Complaints</h1>
            <div className="status-tabs">
                {['All', 'Pending', 'In Progress', 'Resolved'].map(status => (
                    <div key={status} className={`tab ${statusFilter === status ? 'active' : ''}`} onClick={() => setStatusFilter(status)}>
                        {status}
                    </div>
                ))}
            </div>
            <button className="analysis-button" onClick={openModal}>Analysis</button>

            <table>
                <thead>
                    <tr>
                        <th>Complaint ID</th>
                        <th>Mail Id</th>
                        <th>Complaint Type</th>
                        <th>Complaint Description</th>
                        <th>Assigned Staff</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredComplaints.length > 0 ? (
                        filteredComplaints.map(complaint => (
                            <tr key={complaint._id}>
                                <td>{complaint.complaintId}</td>
                                <td>{complaint.mailId}</td>
                                <td>{complaint.category}</td>
                                <td>{complaint.description}</td>
                                <td>
                                    <select value={complaint.assignedStaff || ''} onChange={(e) => handleChange(complaint._id, { assignedStaff: e.target.value })}>
                                        <option value="">Choose...</option>
                                        <option value="Treasurer">Treasurer</option>
                                        <option value="Boat Register">Boat Register</option>
                                        <option value="Employee manager">Employee manager</option>
                                        <option value="Sales staff">Sales staff</option>
                                        <option value="Events staff">Events staff</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </td>
                                <td>
                                    <select value={complaint.status} onChange={(e) => handleChange(complaint._id, { status: e.target.value })}>
                                        <option value="Pending">Pending</option>
                                        <option value="In Progress">In Progress</option>
                                        <option value="Resolved">Resolved</option>
                                    </select>
                                </td>
                                <td>
                                    <button onClick={() => handleEdit(complaint)} className="icon-btn">
                                        <i className="fas fa-edit"></i>
                                    </button>
                                    <button onClick={() => handleDelete(complaint._id)} className="icon-btn">
                                        <i className="fas fa-trash"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7">No complaints available.</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
                <h2>Complaint Analysis</h2>
                <div>
                    <Pie data={pieData} id="complaintPieChart" />
                </div>
                <button onClick={downloadGraph}>Download Graph</button>
                <button onClick={closeModal}>Close</button>
            </Modal>

            {selectedComplaint && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Complaint Details</h2>
                        <p><strong>Complaint ID:</strong> {selectedComplaint.complaintId}</p>
                        <p><strong>Mail ID:</strong> {selectedComplaint.mailId}</p>
                        <p><strong>Complaint Type:</strong> {selectedComplaint.category}</p>
                        <p><strong>Description:</strong> {selectedComplaint.description}</p>
                        <textarea value={note} onChange={(e) => setNote(e.target.value)} />
                        <button onClick={handleUpdate}>Save Changes</button>
                        <button onClick={() => setSelectedComplaint(null)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Complaints;
