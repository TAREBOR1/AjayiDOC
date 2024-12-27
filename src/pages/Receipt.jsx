import React from 'react'
import { Link } from 'react-router-dom'

const Receipt = () => {
  return (
    <div>
            <div class="max-w-md mx-auto mt-8 bg-white shadow-md rounded-lg p-6">
    <div class="border-b pb-4 mb-4">
      <h2 class="text-lg font-bold text-gray-800">Account Status</h2>
      <p class="text-sm font-semibold text-gray-600 mt-2">Total Amount Owned</p>
      <p class="text-xs text-gray-500">as of December 25, 2024:</p>
      <p class="text-3xl font-bold text-gray-900 mt-2">$19,235,645,700.25</p>
      <a href="#" class="text-blue-600 text-sm underline mt-2 block hover:text-blue-800">
        View Balance Details
      </a>
    </div>

    <div>
      <h2 class="text-lg font-bold text-gray-800">Payments</h2>
      <button class="w-full bg-blue-600 text-white text-sm font-semibold py-2 mt-4 rounded-md hover:bg-blue-700">
       <Link to='/pending'>  MAKE A PAYMENT</Link>
      </button>

      <div class="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 rounded-md">
        <div class="flex items-start">
          <div class="text-blue-500 text-2xl mr-3">
            &#9432;
          </div>
          <div>
            <p class="text-sm font-semibold text-gray-800">
              You have a pending crypto payment:
            </p>
            <ul class="list-disc text-gray-700 text-sm pl-5 mt-2">
              <li>$477.00 made on April 18, 2024</li>
            </ul>
            <p class="text-sm text-gray-600 mt-2">
              The total amount owned does not reflect this pending payment.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Receipt
