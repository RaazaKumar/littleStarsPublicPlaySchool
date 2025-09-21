import React from "react";

export default function Text({ text1, text2 }) {
  return (
    <div className="flex justify-center items-center gap-4">
      <h1 className="text-2xl md:text-3xl font-bold text-red-600 mb-2">
        {text1}
      </h1>

      <p className="text-2xl md:text-3xl font-bold text-black mb-2">
        {text2}
      </p>
    </div>
  );
}
