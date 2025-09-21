import React, { useEffect, useState } from "react";
const slidesData = [
  {
    title: "Simultala School Entrance Preparation",
    text: "Our program for Simultala Awasiya Vidyalaya focuses on concept clarity and problem-solving techniques tailored to the entrance exam pattern.",
    images: ["/slider2.jpeg", "/slider2.jpeg", "/slider2.jpeg"],
  },
  {
    title: "Smart Learning for Exams",
    text: "We provide modern techniques and practice material to boost confidence and problem-solving speed.",
    images: ["/slider2.jpeg", "/slider2.jpeg", "/slider2.jpeg"],
  },
  {
    title: "Personalized Guidance",
    text: "Each student receives attention with customized study plans and mentoring for better results.",
    images: ["/slider2.jpeg", "/slider2.jpeg", "/slider2.jpeg"],
  },
];

export default function Footer_last_box() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slidesData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto rounded-2xl shadow-lg bg-gray-100 flex justify-center items-center overflow-hidden px-2 sm:px-4">
      <div
        className="flex transition-transform duration-700 ease-in-out w-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slidesData.map((item, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 p-4 sm:p-6 text-center flex flex-col items-center"
          >
            <h1 className="text-lg  md:text-2xl font-bold mb-3 text-gray-800">
              {item.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 max-w-3xl mx-auto leading-relaxed">
              {item.text}
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`slide-${i}`}
                  className="w-28 h-20 sm:w-36 sm:h-28 md:w-48 md:h-36 lg:w-56 lg:h-40 object-cover rounded-xl border border-gray-300 shadow-sm"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
