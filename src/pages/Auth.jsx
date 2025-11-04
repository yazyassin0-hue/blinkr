import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // تحقق بسيط (يمكنك لاحقًا ربطه بـ Supabase أو API)
    if (email && password) {
      localStorage.setItem("loggedIn", "true");
      navigate("/home");
    } else {
      alert("يرجى إدخال البريد وكلمة المرور");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-         className="border border-gray-300 rounded-lg p-3 text-right focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition duration-200"
          >
            تسجيل الدخول
          </button>
        </form>

        <p className="text-gray-600 text-sm mt-6">
          لا تملك حسابًا؟ <span className="text-blue-600 font-semibold">سجّل لاحقًا</span>
        </p>
      </div>
    </div>
  );
}
