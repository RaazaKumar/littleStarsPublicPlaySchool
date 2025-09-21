import React from "react";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-20 flex flex-col md:flex-row items-center gap-8">
      
      {/* Image */}
      <div className="flex-1">
        <img
          src="/slider1.jpeg"
          alt="Little Stars Public Play School"
          className="w-full h-auto rounded-2xl shadow-lg object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 flex flex-col gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
          About Our School
        </h1>
        <p className="text-gray-700 text-sm md:text-base leading-relaxed">
          “Little Stars Public Play School – where learning meets inspiration. 
          Our dedicated educators and modern methods nurture young minds, 
          building confident, compassionate leaders of tomorrow.”
        </p>
      </div>
    </section>
  );
}
