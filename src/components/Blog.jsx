import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='text-blue-500 text-3xl font-semibold mb-3 mt-4 text-center'>Here Some Blogs About Us</h1>
        <div className='lg:flex justify-center gap-7 mb-3 mt-3'>
            <div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Good Health</h2>
    <p>Feb 17, 2025 | ACH News</p>
    <p>
With over 6,000 3D structures, Visible Body Suite is designed for student learning and discovery. Visible Body Courseware leverages the power of those 3D models, providing a teaching and learning .... </p>
  </div>
  <figure>
    <img
      src="https://i.ibb.co.com/TDNntTJg/Screenshot-2025-02-18-222653.png"
      alt="Image" />
  </figure>
</div>
<div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Annual Report</h2>
    <p>Feb 16, 2025 | Like News</p>
    <p>Qualified healthcare professionals conducted various screenings including height, weight, BMI calculations, blood pressure measurements, dental checkups, and vision tests. Additionally, informational sessions were held on topics like nutrition, hygiene, and stress management.....</p>
  </div>
  <figure>
    <img
      src="https://i.ibb.co.com/twbf84xb/Screenshot-2025-02-18-223254.png"
      alt="image" />
  </figure>
</div>
        </div>
        </div>
    );
};

export default Blog;