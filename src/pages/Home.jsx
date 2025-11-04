import React from "react";

export default function Home() {
  return (
    <div className="bg-[#1e2a47] text-white min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4 border-b border-gray-600">
        <h1 className="text-xl font-bold">Blinkr</h1>
        <div className="flex items-center gap-4">
          <button>💬</button>
          <button>🔔</button>
          <button>☰</button>
        </div>
      </header>

      <main className="flex justify-around mt-6">
        <button className="bg-blue-600 p-3 rounded-lg">المنشورات</button>
        <button className="bg-purple-600 p-3 rounded-lg">الريلز</button>
        <button className="bg-pink-600 p-3 rounded-lg">الرسومات</button>
      </main>

      <div className="flex justify-center mt-10">
        <button className="bg-green-500 text-white text-3xl rounded-full w-16 h-16">
          +
        </button>
      </div>
    </div>
  );
}
