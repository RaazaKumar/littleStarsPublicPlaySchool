import { useState, useEffect } from "react";

const slides = [
  {
    image: "/slider1.jpeg",
    text: "Welcome to Little Stars Public Play School",
  },
  {
    image: "/slider2.jpeg",
    text: "Nurturing Young Minds with Care",
  },
  {
    image: "/slider3.jpeg",
    text: "Little Stars, Big Dreams",
  },
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Manual slide next/prev
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative w-full h-[40vh] sm:h-[55vh] md:h-[65vh] lg:h-[85vh] overflow-hidden mt-[11.128rem] md:mt-[8rem] lg:mt-[5.128rem]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.text}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4">
            <h1 className="text-white text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center leading-snug sm:leading-normal">
              {slide.text}
            </h1>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 md:p-4 rounded-full text-base sm:text-lg md:text-xl hover:bg-black/70 transition"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 sm:p-3 md:p-4 rounded-full text-base sm:text-lg md:text-xl hover:bg-black/70 transition"
      >
        &#8594;
      </button>
    </section>
  );
}
