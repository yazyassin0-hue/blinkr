import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase, useDemo, DemoBackend } from '../lib/supabaseClient';
import { useTranslation } from 'react-i18next';

export default function Auth(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState('');
  const navigate = useNavigate();
  const { t } = useTranslation();

  async function signUp(){
    if(useDemo){
      alert('Demo: تم إنشاء حساب تجريبي (لن يتم تخزينه في Supabase)');
      navigate('/');
      return;
    }
    const { data, error } = await supabase.auth.signUp({ email, password });
    if(error) alert(error.message); else navigate('/');
  }

  return (
    <div className='container rtl'>
      <div className='card'>
        <h2 className='text-2xl mb-4'>{t('login')}</h2>
        <label>البريد الإلكتروني</label>
        <input className='block w-full p-2 rounded my-2 text-black' value={email} onChange={e=>setEmail(e.target.value)} />
        <label>كلمة السر</label>
        <input type='password' className='block w-full p-2 rounded my-2 text-black' value={password} onChange={e=>setPassword(e.target.value)} />
        <div className='flex gap-2 mt-4'>
          <button onClick={signUp} className='btn'>{t('signup')}</button>
        </div>
      </div>
    </div>
  );
}
