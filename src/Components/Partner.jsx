import React from 'react';

const Partner = () => {
  return (
    <div className=" "> {/* Padding */}


<img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 alt="..."
 className='w-full md:h-[350px] h-[350px] object-cover'
 />
<div className='px-5 py-5'>
      
<div className="relative  font-quicksand text-center items-center justify-center  flex flex-col">
    <h2 className="text-lg sm:text-xl md:text-2xl text-center lg:text-3xl font-bold">
    Become a tiket.com Partner    </h2>
    <div className="absolute bottom--1  w-1/2 h-1 mt-10 rounded-full bg-[#38bdf8]"></div>
  </div>


      <section className="mt-4 font-mono text-[#475569]">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold font-quicksand text-[#27272a]">Why Partner with Us?</h2>
        <p>
          By partnering with tiket.com, you gain access to a broad audience and new business opportunities.
          Our platform provides tools and support to help you grow your business. 
        </p>
        <ul className="list-disc list-inside">
          <li>Increased visibility for your business</li>
          <li>Access to marketing and promotional resources</li>
          <li>Dedicated support team to assist you</li>
        </ul>
      </section>
      
      <section className="mt-4 font-mono text-[#475569]">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold font-quicksand text-[#27272a]">How to Become a Partner</h2>
        <p>
          Becoming a tiket.com partner is easy. Simply follow these steps:
        </p>
        <ol className="list-decimal list-inside">
          <li>Register on our partner platform</li>
          <li>Complete the verification process</li>
          <li>Start promoting and earning</li>
        </ol>
      </section>
      
      <section className="mt-4 font-mono text-[#475569]">
        <h2 className="text-lg md:text-xl lg:text-2xl font-semibold font-quicksand text-[#27272a]">Contact Us</h2>
        <p>
          If you have any questions or need assistance, feel free to reach out to our partner support team.
        </p>
        <p>
          Email: support@tiket.com
        </p>
      </section>
</div>
    
    </div>
  );
};

export default Partner;
