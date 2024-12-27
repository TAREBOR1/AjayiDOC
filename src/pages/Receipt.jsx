import React from 'react';
import { Link } from 'react-router-dom';

const Receipt = () => {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
        <div className="border-b pb-4 mb-4">
          <h2 className="text-lg font-bold text-gray-800">Account Status</h2>
          <p className="text-sm font-semibold text-gray-600 mt-2">Total Amount Owned</p>
          <p className="text-xs text-gray-500">as of December 25, 2024:</p>
          <p className="text-3xl font-bold text-gray-900 mt-2">$19,235,645,700.25</p>
          <a href="#" className="text-blue-600 text-sm underline mt-2 block hover:text-blue-800">
            View Balance Details
          </a>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-800">Payments</h2>
          <button className="w-full bg-blue-600 text-white text-sm font-semibold py-2 mt-4 rounded-md hover:bg-blue-700">
            <Link to="/pending">MAKE A PAYMENT</Link>
          </button>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
            <div className="flex items-start">
              <div className="text-blue-500 text-2xl mr-3">
                &#9432;
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  You have a pending crypto payment:
                </p>
                <ul className="list-disc text-gray-700 text-sm pl-5 mt-2">
                <li>Hi <strong>Abdellatif Mahmoud Idriss </strong>your Withdrawn payment of $5,000,000.00 has been proceed and made on December 25,2024</li>
                </ul>
                <p className="text-sm text-gray-600 mt-2">
                  The total amount owned does not reflect this pending payment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
