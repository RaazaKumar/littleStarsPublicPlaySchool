import React, { useState } from "react"; // ✅ state ke liye import
import GeneralEnquery from "../Components/GeneralEnquery";
import RegistrationForm from "../Components/RegistrationForm";
import MapBox from "../Components/MapBox";


export default function ContactUs() {
  const [activeForm, setActiveForm] = useState("general");
  return (
    <>
      <div className="flex flex-col justify-center items-center text-center gap-4 px-6 py-16 rounded-2xl mt-[11.128rem] md:mt-[8rem] lg:mt-[8rem] ">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 drop-shadow-md">
          Get in Touch
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl text-gray-800 text-sm md:text-lg leading-relaxed">
          Choose the appropriate form to connect with us for{" "}
          <span className="font-semibold text-red-700">general enquiries</span>{" "}
          or{" "}
          <span className="font-semibold text-red-700">
            admission-related queries
          </span>
          .
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <button
            onClick={() => setActiveForm("general")} // ✅ click par general form dikhayega
            className={`px-6 py-3 font-semibold rounded-full shadow-md transition duration-300 
              ${
                activeForm === "general"
                  ? "bg-red-500 text-white" // ✅ active button ka style
                  : "bg-gray-300 text-gray-600 hover:bg-red-300 hover:shadow-red-600"
              }`}
          >
            General Enquiry
          </button>

          <button
            onClick={() => setActiveForm("registration")} // ✅ click par registration form dikhayega
            className={`px-6 py-3 font-semibold rounded-full shadow-md transition duration-300 
              ${
                activeForm === "registration"
                  ? "bg-red-500 text-black" // ✅ active button ka style
                  : "bg-gray-300 text-gray-600 hover:bg-red-300 hover:shadow-red-600"
              }`}
          >
            Registration Form
          </button>
        </div>
      </div>

      {/* ✅ Conditional Rendering - ek waqt me ek hi form dikhayega */}
      {activeForm === "general" && <GeneralEnquery />}
      {activeForm === "registration" && <RegistrationForm />}


      {/* Mapbox Component */}
    <div className="w-full max-w-7xl mx-auto px-6 py-12">
  <div className="grid md:grid-cols-2 gap-8 items-center">
    
    {/* Map */}
    <div className="w-full h-[350px] rounded-2xl shadow-lg overflow-hidden border border-gray-300">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d478.94618274704857!2d85.30492949996392!3d25.504855350204085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29f257e5e3873%3A0xc98a2b0f84a3403a!2sFatwah%2C%20Bihar%20803201!5e0!3m2!1sen!2sin!4v1758319478249!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowFullScreen=""
        loading="lazy"
        className="w-full h-full"
      ></iframe>
    </div>

    {/* Contact Info */}
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4 border border-gray-200">
      <h1 className="text-2xl font-bold text-blue-600">
        LITTLE STARS PUBLIC PLAY SCHOOL, FATUHA
      </h1>
      <p className="text-gray-700">
        📌 <span className="font-semibold">Address:</span>{" "}
        Station Road, Fatuha, Patna (Bihar) - 803201
      </p>
      <p className="text-gray-700">
        📞 <span className="font-semibold">Phone:</span>{" "}
        +91 9876543210
      </p>
      <p className="text-gray-700">
        🗓️ <span className="font-semibold">Working Days:</span>{" "}
        Monday - Saturday
      </p>
      <p className="text-gray-700">
        ⏰ <span className="font-semibold">Working Hours:</span>{" "}
        8:00 AM - 5:00 PM
      </p>
      <p className="text-gray-700">
        🚫 <span className="font-semibold">Holidays:</span>{" "}
        Sunday and Government Holidays
      </p>
    </div>
  </div>
</div>


       
    </>
  );
}
