import React from "react";

const Resume = () => {
  // Sample data for the list feed
  const items = [
    { id: 1, title: "Bachelor Degree", description: "Bachelor of Science in Computer Science" },
    { id: 2, title: "Current GPA", description: "3.05" },
    { id: 3, title: "School Education", description: "D.S Senanayake College, Colombo 07" },
    { id: 4, title: "GCE Advanced Level (Physical Science Stream) B3 - Z Score 1.3078", description: "GCE Ordinary Level A8 C1" },
    // Add more items here as needed
  ];

  return (
    <div className="container mx-auto py-8 w-full bg-gradient-to-b from-black to-gray-800">
      <div className="flex justify-center">
        <div className="flex flex-wrap items-center justify-center">
          {items.map((item) => (
            <div key={item.id} className="bg-white p-4 shadow-md rounded-lg mx-2 my-2 md:w-96">
              {/* Use md:w-96 to set the width to 24rem for medium screens and above */}
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resume;




