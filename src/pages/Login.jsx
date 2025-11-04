import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // من هنا يمكن تنفيذ وظيفة تسجيل الدخول
    console.log('Logging in with email: ', email);
  };

  return (
    <div className="login-container">
      <h2>تسجيل الدخول</h2>
      <input 
        type="email" 
        placeholder="البريد الإلكتروني" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="كلمة المرور" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>دخول</button>
      <p>لا تملك حساب؟ <a href="/signup">إنشاء حساب</a></p>
    </div>
  );
};

export default Login;
