import React, { useRef, useState } from "react";

import axios from "axios";
export default function RegistrationForm() {
   const [toast, setToast] = useState({ message: "", type: "" });

  const nameRef = useRef();
  const fathernameRef = useRef();
  const mothernameRef = useRef();
  const dobRef = useRef();
  const aadharRef = useRef();
  const bloodgroupRef = useRef();
  const genderRef = useRef();
  const previousclassRef = useRef();
  const addressRef = useRef();
  const contactRef = useRef();
  const whatsappRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = {
      name: nameRef.current.value,
      fathername: fathernameRef.current.value,
      mothername: mothernameRef.current.value,
      dob: dobRef.current.value,
      aadhar: aadharRef.current.value,
      bloodgroup: bloodgroupRef.current.value,
      gender: genderRef.current.value,
      previousclass: previousclassRef.current.value,
      address: addressRef.current.value,
      contact: contactRef.current.value,
      whatsapp: whatsappRef.current.value,
    };

    try {
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await axios.post(
        `${API_URL}/api/user/registration`,
        submitData
      );
        // Show success toast
      setToast({ message: "Form submitted successfully!", type: "success" });

      //clear the inputs
      nameRef.current.value = "";
      fathernameRef.current.value = "";
      mothernameRef.current.value = "";
      dobRef.current.value = "";
      aadharRef.current.value = "";
      bloodgroupRef.current.value = "";
      genderRef.current.value = "";
      previousclassRef.current.value = "";
      addressRef.current.value = "";
      contactRef.current.value = "";
      whatsappRef.current.value = "";
    } catch (error) {
  setToast({
        message: err.response?.data?.message || "Something went wrong!",
        type: "error",
      });
    }
     setTimeout(() => setToast({ message: "", type: "" }), 3000);
  };

  return (
  <>  {toast.message && (
        <div
          className={`fixed top-5 right-5 px-4 py-2 rounded shadow-md text-white z-50 transition-all duration-300 ${
            toast.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}
        >
          {toast.message}
        </div>
      )}
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-7xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6"
    >
      {/* 🔹 max-w-7xl (80rem) for wide layout */}

      {/* Student Name + Father's Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Student Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            ref={nameRef}
            placeholder="Enter student's name"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Father's Name <span className="text-red-500">*</span>
          </label>
          <input
            name="fathername"
            ref={fathernameRef}
            type="text"
            placeholder="Enter father's name"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            required
          />
        </div>
      </div>

      {/* Mother's Name + DOB */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Mother's Name <span className="text-red-500">*</span>
          </label>
          <input
            name="mothername"
            ref={mothernameRef}
            type="text"
            placeholder="Enter mother's name"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date of Birth <span className="text-red-500">*</span>
          </label>
          <input
            name="dob"
            ref={dobRef}
            type="date"
            placeholder="dd-mm-yyyy"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            required
          />
        </div>
      </div>

      {/* Aadhar + Blood Group */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Aadhar Number <span className="text-gray-400">(optional)</span>
          </label>
          <input
            name="aadhar"
            ref={aadharRef}
            type="text"
            maxLength="12"
            placeholder="12-digit Aadhar"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Blood Group <span className="text-gray-400">(optional)</span>
          </label>
          <input
            name="bloodgroup"
            ref={bloodgroupRef}
            type="text"
            placeholder="e.g., A+, O-, B+"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Gender + Previous Class */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender <span className="text-red-500">*</span>
          </label>
          <select
            name="gender"
            ref={genderRef}
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            required
          >
            <option value="">Select gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Previous Class <span className="text-red-500">*</span>
          </label>
          <select
            name="previousclass"
            ref={previousclassRef}
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            required
          >
            <option value="">Select class</option>
            <option>Nursery</option>
            <option>LKG</option>
            <option>UKG</option>
            <option>Class 1</option>
            <option>Class 2</option>
            <option>Class 3</option>
            <option>Class 4</option>
            <option>Class 5</option>
            <option>Class 6</option>
            <option>Class 7</option>
          </select>
        </div>
      </div>

      {/* Address */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Address <span className="text-red-500">*</span>
        </label>
        <textarea
          name="address"
          ref={addressRef}
          placeholder="Full address"
          rows="2"
          className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
          required
        ></textarea>
      </div>

      {/* Contact + WhatsApp */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Contact Number <span className="text-red-500">*</span>
          </label>
          <input
            name="contact"
            ref={contactRef}
            type="tel"
            maxLength="10"
            placeholder="10-digit mobile"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            WhatsApp Number <span className="text-gray-400">(optional)</span>
          </label>
          <input
            name="whatsapp"
            ref={whatsappRef}
            type="tel"
            maxLength="10"
            placeholder="10-digit WhatsApp"
            className="mt-1 w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition"
      >
        Submit Admission
      </button>
    </form>
  </>)
}
