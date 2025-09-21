import React from "react";

export default function Fee() {
  return (
    <>
      <section className=" max-w-7xl mx-auto px-4 py-10 md:py-10 gap-10 mt-[11.128rem] md:mt-[8rem] lg:mt-[8rem]">
        {/* Image */}
        <div className=" flex justify-center">
          <img
            src="slider1.jpeg"
            alt="School Logo"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Title & Description */}
        <div className="flex-1 my-6 flex flex-col justify-center gap-4 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-red-600 self-center">
            LITTLE STARS PUBLIC PLAY SCHOOL
          </h1>
          <p className="text-gray-700 text-base md:text-lg self-center">
            Transparent & Affordable Fee Structure For Quality Education
          </p>
        </div>

        {/* Fee Table */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="flex justify-around bg-yellow-100 px-4 py-2 font-bold text-black-700">
            <h1>CLASS</h1>
            <p>FEE (MONTHLY)</p>
          </div>

          {/* Fee Rows */}
          <div className="divide-y divide-gray-200">
            {[
              ["Pre N.C", "₹500"],
              ["L.K.G", "₹600"],
              ["U.K.G", "₹700"],
              ["Class 1 & 2", "₹750"],
              ["Class 3 & 4", "₹800"],
              ["Class 5 & 6", "₹850"],
              ["Class 7", "₹900"],
              ["Class 8", "₹1000"],
            ].map(([cls, fee], idx) => (
              <div
                key={idx}
                className=" w-[60%] mx-auto flex justify-between px-4 py-3 hover:bg-yellow-50 transition-colors"
              >
                <h1 className="font-medium text-green-800">{cls}</h1>
                <p className="font-semibold text-red-600">{fee}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Card Container */}
<div className="flex flex-wrap justify-center gap-6 p-4 sm:p-6 md:p-8 w-full max-w-7xl mx-auto">
  {[
    ["⚙️", "Registration Fee", "₹100 (One-time)"],
    ["➕", "Admission Fee", "₹100 (One-time)"],
    ["📑", "Miscellaneous Fee", "₹2000 (Yearly)"],
    ["📃", "Examination Fee", "₹300 (Per Term)"],
    ["🛌", "Hostel Fee", "₹5500 (Per Month)"],
    ["🍽️", "Mess Fee", "₹2500 (Per Month)"],
    ["🚌", "Transport Fee", "₹1000 - ₹3000 (Per Month)"],
  ].map(([icon, label, amount], idx) => (
    <div
      key={idx}
      className="rounded-2xl shadow-lg p-6 flex flex-col items-center gap-3 w-40 sm:w-52 md:w-60 hover:scale-105 transform transition duration-300 shadow-neutral-500 bg-white"
    >
      {/* Icon */}
      <p className="text-3xl sm:text-4xl">{icon}</p>

      {/* Label */}
      <p className="font-semibold text-gray-700 text-center text-sm sm:text-base">
        {label}
      </p>

      {/* Amount */}
      <h1 className="font-bold text-red-600 text-base sm:text-lg">{amount}</h1>
    </div>
  ))}
</div>


      {/* Note */}
      <h1 className="text-center italic text-2xl text-gray-600 mt-4 underline">Notes</h1>
      <p className="text-center italic text-sm text-gray-600 mt-4">
        * Tuition fees are payable monthly. Admission, miscellaneous, and
        examination fees are charged as specified. Hostel charges apply
        separately for boarding students.
      </p>
    </>
  );
}
