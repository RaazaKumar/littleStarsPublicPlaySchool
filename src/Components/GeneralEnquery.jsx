import React, { useRef, useState } from "react";

import axios from "axios";

export default function GeneralEnquery() {
 const [toast, setToast] = useState({ message: "", type: "" }); 

  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  const addressRef = useRef();
  const queryRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      mobile: mobileRef.current.value,
      address: addressRef.current.value,
      query: queryRef.current.value,
    };

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await axios.post(
        `${API_URL}/api/user/enquiry`,
        formData
      );
  // Show success toast
      setToast({ message: "Form submitted successfully!", type: "success" });
     
      //form reset
      nameRef.current.value = "";
      emailRef.current.value = "";
      mobileRef.current.value = "";
      addressRef.current.value = "";
      queryRef.current.value = "";
    } catch (err) {
      setToast({
        message: err.response?.data?.message || "Something went wrong!",
        type: "error",
      });
    }
     setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };
  return (
    <div>
       {toast.message && (
        <div
          className={`fixed top-5 right-5 px-4 py-2 rounded shadow-md text-white z-50 transition-all duration-300 ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )}
      <div className="flex justify-center items-center py-2 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6"
        >
          {/* Full Name + Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                ref={nameRef}
                placeholder="Your Name"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="email"
                ref={emailRef}
                name="email"
                placeholder="Your Email"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              />
            </div>
          </div>

          {/* Mobile Number + Address */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                ref={mobileRef}
                name="mobile"
                placeholder="10-digit mobile number"
                maxLength="10"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                ref={addressRef}
                name="address"
                placeholder="Your Address"
                className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Query (Full Width) */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Query <span className="text-red-500">*</span>
            </label>
            <textarea
              name="query"
              ref={queryRef}
              placeholder="Ask your query here..."
              rows="4"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-500 text-white font-semibold py-3 rounded-lg hover:bg-red-600 transition"
          >
            Submit Enquiry
          </button>
        
        </form>
      </div>
    </div>
  );
}
