import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        مرحبًا بك في Blinkr
      </h1>
      <p className="text-lg text-gray-700 mb-6 text-center">
        هذا هو الصفحة الرئيسية لتطبيق Blinkr. يمكنك البدء من هنا.
      </p>
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
        استكشاف المزيد
      </button>
    </div>
  );
}
