import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf'; // for generating PDF
import 'jspdf-autotable'; // for adding tables to PDF
import '../UserPage/UserPage.css';

const PaymentDetails = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/payment-details');
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payment details', error);
      }
    };

    fetchPayments();
  }, []);

  // Calculate total amount
  const totalAmount = payments.reduce((total, payment) => total + parseFloat(payment.amount), 0).toFixed(2);

  // Handle PDF download
  const handleDownload = () => {
    const doc = new jsPDF();
    doc.text('Payment Details', 14, 16);
    doc.autoTable({
      startY: 22,
      head: [['Amount', 'Member Name', 'Phone Number', 'Date']],
      body: payments.map(payment => [
        payment.amount,
     
        payment.memberName,
        payment.phoneNumber,
        new Date(payment.date).toLocaleDateString()
      ]),
    });
    doc.text(`Total Amount: LKR ${totalAmount}`, 14, doc.autoTable.previous.finalY + 10);
    doc.save('payment-details.pdf');
  };

  return (
    <div className="user-page">
      <div className="payment-details max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Payment Details</h2>
        {payments.length === 0 ? (
          <div className="text-center">No payment details found.</div>
        ) : (
          <>
            <table className="min-w-full divide-y divide-gray-200 mb-4">
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
         
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Member Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {payments.map(payment => (
                  <tr key={payment._id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{payment.amount}</td>
   
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.memberName}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{payment.phoneNumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(payment.date).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-between">
              <button
                onClick={handleDownload}
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              >
                Download PDF
              </button>
              <Link to="/userpage">
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                >
                  Back
                </button>
              </Link>
            </div>
            <div className="text-center mt-4">
              <strong>Total Amount:</strong> LKR {totalAmount}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentDetails;
