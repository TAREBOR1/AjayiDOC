import React from 'react'

const Pending = () => {
  return (
    <div>
           <div class="max-w-md mx-auto mt-6 bg-white shadow-md rounded-lg p-6">
<div class="text-center mb-6">
  <p class="text-3xl font-bold text-gray-800">£1,085.25</p>
</div>

<div>
  <h2 class="text-sm font-bold text-gray-600 uppercase mb-4">Transfer Details</h2>

  <div class="flex justify-between items-center mb-4">
    <span class="text-sm text-gray-600">Status</span>
    <div class="flex items-center">
      <span class="text-sm text-yellow-600 font-medium">Pending</span>
      <span class="ml-2 text-yellow-500 text-lg">&#9201;</span>
    </div>
  </div>
  <div class="flex justify-between items-center mb-4">
    <span class="text-sm text-gray-600">Withdrawn Amount</span>
    <span class="text-sm font-medium text-gray-800">£1,085.25</span>
  </div>
  <div class="flex justify-between items-center mb-4">
    <span class="text-sm text-gray-600">Refunds</span>
    <span class="text-sm font-medium text-gray-800">£0.00</span>
  </div>

  <div class="flex justify-between items-center border-t pt-4">
    <span class="text-sm text-gray-600">End balance</span>
    <span class="text-sm font-medium text-gray-800">£1,085.25</span>
  </div>
</div>

<div class="mt-6">
  <div class="mb-4">
    <p class="text-sm text-gray-600">Transfer date and time</p>
    <p class="text-sm font-medium text-gray-800">Due 28 December 2024, 10:00</p>
  </div>
  <div class="mb-4">
    <p class="text-sm text-gray-600">Transactions date</p>
    <p class="text-sm font-medium text-gray-800">26 December 2024</p>
  </div>
  <div>
    <p class="text-sm text-gray-600">Payment reference</p>
    <p class="text-sm font-medium text-gray-800">DOJO27092023</p>
  </div>
</div>
</div>

<div class="fixed bottom-0 w-full bg-white border-t">
<div class="flex justify-around items-center py-4">
  <div class="flex flex-col items-center text-gray-500">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M8 16h8M8 12h8m-6-4h6M9 20h6m-9-4h6m-3-2v6M3 8v13m4-5h10" />
    </svg>
    <span class="text-xs">Transactions</span>
  </div>
  <div class="flex flex-col items-center text-gray-500">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M16 2H8a2 2 0 00-2 2v16a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-4 4h4M9 7h6" />
    </svg>
    <span class="text-xs">Tools</span>
  </div>
  <div class="flex flex-col items-center text-blue-600">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14m-7-7v14" />
    </svg>
    <span class="text-xs">Transfers</span>
  </div>
  <div class="flex flex-col items-center text-gray-500">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0v7m0-7L3 9m9 0l9-4" />
    </svg>
    <span class="text-xs">Account</span>
  </div>
</div>
</div>
    </div>
  )
}

export default Pending
