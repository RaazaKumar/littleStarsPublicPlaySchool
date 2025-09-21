import React from "react";
import Text from "./Text";

export default function Message_From_Dir() {
  return (
    <div className="m-6 py-12 bg-gradient-to-r from-yellow-50 to-white rounded-2xl shadow-lg">
      {/* Heading */}
      <Text text1="Message from the" text2="Director" />

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 px-6 md:px-12">
        {/* Director Image */}
        <div className="flex-shrink-0">
          <img
            src="/slider1.jpeg"
            alt="Director"
            className="w-48 h-48 md:w-56 md:h-56 object-cover rounded-full shadow-lg border-4 border-red-200"
          />
        </div>

        {/* Message Content */}
        <div className="text-center md:text-left max-w-3xl">
          <p className="text-gray-700 leading-relaxed text-lg italic mb-6">
            “At Little Stars Public Play School, our mission goes beyond academics — we believe in nurturing every child’s curiosity, creativity, and character. Education here is not confined to books; it is a journey where young learners develop confidence, compassion, and critical thinking. We aim to provide a balanced foundation that blends traditional values with modern teaching methods, ensuring children grow into responsible, capable, and empathetic individuals. With a child-centered approach, innovative learning spaces, and a dedicated team of educators, we strive to prepare every student not just for examinations, but for life itself. Together, we envision a future where each child shines as a leader, a thinker, and a kind human being.”
          </p>

          <h3 className="text-xl font-semibold text-red-600">Kajal Singh</h3>
          <p className="text-gray-500">Director, Little Stars Public Play School</p>
        </div>
      </div>
    </div>
  );
}
