import React, { useState } from "react";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {isLogin ? "تسجيل الدخول" : "إنشاء حساب جديد"}
        </h2>

        <form className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="اسم المستخدم"
              className="border border-gray-300 rounded-lg p-3 text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          )}

          <input
            type="email"
            placeholder="البريد الإلكتروني"
            className="border border-gray-300 rounded-lg p-3 text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="كلمة المرور"
            className="border border-gray-300 rounded-lg p-3 text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isLogin ? "تسجيل الدخول" : "إنشاء حساب"}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          {isLogin ? "ليس لديك حساب؟" : "هل لديك حساب؟"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 hover:underline"
          >
            {isLogin ? "أنشئ حسابًا" : "سجّل الدخول"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
