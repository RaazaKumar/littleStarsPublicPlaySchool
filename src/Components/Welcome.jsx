import React, { useState, useEffect } from "react";

// Notices Data
const notices = [
  {
    title: "SECONDARY EXAMINATION",
    desc: "Secondary exam of all students will be started from 22/09/2025.",
    date: "04/09/2025",
  },
  {
    title: "ANNUAL EXAMINATION",
    desc: "Annual exam of all students will be started from 15/12/2025.",
    date: "01/12/2025",
  },
  {
    title: "SUMMER VACATION",
    desc: "Summer vacation will be started from 01/06/2025 to 15/06/2025.",
    date: "25/05/2025",
  },
  {
    title: "WINTER VACATION",
    desc: "Winter vacation will be started from 20/12/2025 to 05/01/2026.",
    date: "10/12/2025",
  },
];

export default function WelcomeNotices() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % notices.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % notices.length);
  const prev = () =>
    setCurrent((prev) => (prev === 0 ? notices.length - 1 : prev - 1));

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-20 flex flex-col md:flex-row gap-8">
      {/* Welcome Section */}
      <div className="flex-1 flex flex-col justify-center gap-8">
        <h2 className="text-lg md:text-xl font-semibold">Welcome to</h2>
        <h1 className="text-3xl md:text-5xl font-bold">
          Little Stars Public Play School
        </h1>
        <p className="text-sm md:text-base">
          Inspiring minds, nurturing hearts, and guiding dreams for a brighter
          tomorrow
        </p>
        <button className="w-[10rem] mt-4 bg-yellow-400 text-red-600 font-bold px-6 py-2 rounded-full hover:bg-yellow-300 transition duration-300">
          Preview
        </button>
      </div>

      {/* Notices Section */}
      <div className="flex-1 max-w-md mx-auto relative">
        {/* Desktop / md+: Vertical Slider */}
        <div className="hidden md:block bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden h-64 relative">
          {notices.map((notice, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-transform duration-700 flex flex-col justify-center p-6 ${
                idx === current
                  ? "translate-y-0"
                  : idx < current
                  ? "-translate-y-full"
                  : "translate-y-full"
              }`}
            >
              <h3 className="font-semibold text-lg text-red-600">
                {notice.title}
              </h3>
              <p className="text-gray-700 mt-2">{notice.desc}</p>
              <p className="text-gray-400 text-sm mt-1">{notice.date}</p>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-gray-200 p-1 rounded-full hover:bg-gray-300 transition z-10 opacity-50"
          >
            &#9650;
          </button>
          <button
            onClick={next}
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-200 p-1 rounded-full hover:bg-gray-300 transition z-10 opacity-50"
          >
            &#9660;
          </button>
        </div>

        {/* Mobile: Horizontal Slider */}
        <div className="bg-red-300 rounded-2xl shadow-lg border border-gray-200  h-64 relative w-[20rem] overflow-hidden md:hidden">
          {notices.map((notice, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-transform duration-700 flex flex-col justify-center p-6 ${
                idx === current
                  ? "translate-y-0"
                  : idx < current
                  ? "-translate-y-full"
                  : "translate-y-full"
              }`}
            >
              <h3 className="font-semibold text-lg text-red-600">
                {notice.title}
              </h3>
              <p className="text-gray-700 mt-2">{notice.desc}</p>
              <p className="text-gray-400 text-sm mt-1">{notice.date}</p>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-gray-200 p-1 rounded-full hover:bg-gray-300 transition z-10 opacity-50"
          >
            &#9650;
          </button>
          <button
            onClick={next}
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-200 p-1 rounded-full hover:bg-gray-300 transition z-10 opacity-50"
          >
            &#9660;
          </button>
        </div>
      </div>
    </section>
  );
}
