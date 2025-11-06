import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = () => {
    // من هنا يمكن تنفيذ وظيفة إنشاء الحساب
    console.log('Signing up with email: ', email, 'and phone: ', phone);
  };

  return (
    <div className="signup-container">
      <h2>إنشاء حساب جديد</h2>
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
      <input 
        type="text" 
        placeholder="رقم الهاتف"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleSignUp}>إنشاء حساب</button>
    </div>
  );
};

export default SignUp;
