import { useState } from "react";

export default function Ai() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-4 right-5 z-50">
        <div
          className="bg-red-400 flex items-center justify-center h-14 w-14 rounded-full shadow-lg cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <img
            src="/slider1.jpeg"
            alt="AI"
            className="h-10 w-10 rounded-full"
          />
        </div>

        {/* Chat Box */}
        {open && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden">
            {/* Header */}
            <div className="bg-blue-500 text-white px-4 py-2 font-medium flex justify-between items-center">
              <span>AI Chat</span>
              <button onClick={() => setOpen(false)} className="font-bold">
                X
              </button>
            </div>

            {/* Chat Content */}
            <div className="p-4 h-64 overflow-y-auto space-y-2 bg-gray-50">
              <div className="bg-gray-200 px-3 py-2 rounded text-sm">
                Hello! How can I help you?
              </div>
              
            </div>

            {/* Input Field */}
            <div className="p-2 border-t border-gray-200 flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              />
              <button className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600">
                Send
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
