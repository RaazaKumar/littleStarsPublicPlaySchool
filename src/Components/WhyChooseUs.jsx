import React from "react";

// Example data for cards
const facilities = [
  {
    title: "Qualified Faculty",
    desc: "Our experienced educators nurture young minds with care and creativity.",
    img: "/slider1.jpeg",
  },
  {
    title: "Hostel Availability",
    desc: "Safe and comfortable boarding options for outstation students.",
    img: "/slider1.jpeg",
  },
  {
    title: "Rich Library",
    desc: "A treasure trove of knowledge to spark curiosity and learning.",
    img: "/slider1.jpeg",
  },
  {
    title: "Computer Lab",
    desc: "State-of-the-art facilities to enhance digital literacy and skills.",
    img: "/slider1.jpeg",
  },
  {
    title: "Sports Facilities",
    desc: "Encouraging physical fitness and teamwork through diverse sports activities.",
    img: "/slider1.jpeg",
  },
  {
    title: "Transportation",
    desc: "Safe and reliable transport services for students' convenience.",
    img: "/slider1.jpeg",
  },
  {
    title: "AI-Based Face Attendance",
    desc: "Ensuring accurate and secure attendance tracking with advanced technology.",
    img: "/slider1.jpeg",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header / Logo */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-red-600">
            Why Choose Us?
          </h1>
          <p className="text-gray-700 mt-2 text-sm md:text-base">
            At Little Stars Public Play School, we inspire learning, foster
            values, and empower every child to shine.
          </p>
        </div>
      </div>

      {/* Facilities Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {facilities.map((facility, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img
              src={facility.img}
              alt={facility.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold text-red-600 mb-2">
                {facility.title}
              </h2>
              <p className="text-gray-700 text-sm">{facility.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
