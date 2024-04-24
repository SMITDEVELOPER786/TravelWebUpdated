import React from 'react';

const CheckOrders = () => {
  // Sample data to represent orders; in a real-world scenario, this would be fetched from an API
  const orders = [
    {
      id: 'TKT12345',
      date: '2024-03-15',
      status: 'Delivered',
      details: '2 tickets for the concert in New York.',
      tracking: 'Tracking number: 123ABC456DEF',
    },
    {
        id: 'TKT12345',
        date: '2024-03-15',
        status: 'Delivered',
        details: '2 tickets for the concert in New York.',
        tracking: 'Tracking number: 123ABC456DEF',
      },
      {
        id: 'TKT12345',
        date: '2024-03-15',
        status: 'Delivered',
        details: '2 tickets for the concert in New York.',
        tracking: 'Tracking number: 123ABC456DEF',
      },
      {
        id: 'TKT12345',
        date: '2024-03-15',
        status: 'Delivered',
        details: '2 tickets for the concert in New York.',
        tracking: 'Tracking number: 123ABC456DEF',
      },
    {
      id: 'TKT67890',
      date: '2024-03-16',
      status: 'Shipped',
      details: '3 tickets for the football match in London.',
      tracking: 'Tracking number: 789GHI012JKL',
    },
    {
        id: 'TKT67890',
        date: '2024-03-16',
        status: 'Shipped',
        details: '3 tickets for the football match in London.',
        tracking: 'Tracking number: 789GHI012JKL',
      },
      {
        id: 'TKT67890',
        date: '2024-03-16',
        status: 'Shipped',
        details: '3 tickets for the football match in London.',
        tracking: 'Tracking number: 789GHI012JKL',
      },
  ];

  return (
    <div > {/* Padding for overall spacing */}

<img src="https://images.unsplash.com/photo-1529958986175-1cacd1317691?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 alt="..."
 className='w-full h-[55px]  object-cover'
 />

   <div className="px-5 py-5">
   <h1 className="text-3xl font-bold">Check Orders</h1> {/* Page title */}
      
      {orders.map((order) => (
        <div key={order.id} className="mt-4 p-4 border rounded-lg shadow-sm bg-white hover:bg-[#e0f2fe] duration-700"> 
          <h2 className="text-xl font-semibold">Order ID: {order.id}</h2>
          <p>Date: {order.date}</p>
          <p>Status: {order.status}</p>
          <p>Details: {order.details}</p>
          <p>Tracking Info: {order.tracking}</p>
        </div>
      ))}
   </div>
    </div>
  );
};

export default CheckOrders; // Ensure proper export
