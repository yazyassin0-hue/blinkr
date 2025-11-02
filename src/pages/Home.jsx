import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supabase, useDemo, DemoBackend } from '../lib/supabaseClient';

export default function Home(){
  const { t, i18n } = useTranslation();
  const [posts,setPosts]=useState([]);
  const [title,setTitle]=useState(''); const [body,setBody]=useState('');

  useEffect(()=>{ fetchPosts(); }, []);

  async function fetchPosts(){
    if(useDemo){
      setPosts(await DemoBackend.fetchPosts());
      return;
    }
    const { data } = await supabase.from('posts').select('*').order('created_at',{ascending:false});
    setPosts(data||[]);
  }

  async function createPost(){
    if(!title) return alert('اكتب عنوان');
    if(useDemo){ await DemoBackend.createPost({title,body}); setTitle(''); setBody(''); fetchPosts(); return; }
    await supabase.from('posts').insert([{ title, body }]);
    setTitle(''); setBody(''); fetchPosts();
  }

  function toggleLang(){ i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar'); document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'; }

  return (
    <div className='container rtl'>
      <div className='flex justify-between items-center mb-4'>
        <h1 className='text-3xl'>Blinkr</h1>
        <div className='flex gap-2'>
          <button onClick={toggleLang} className='px-3 py-2 rounded border'>تبديل اللغة</button>
          <Link to='/chat' className='px-3 py-2 rounded border'>الدردشة</Link>
          <Link to='/auth' className='px-3 py-2 rounded border'>{t('login')}</Link>
        </div>
      </div>

      <div className='card mb-4'>
        <h2>{t('create_post')}</h2>
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder='عنوان' className='block w-full p-2 my-2 text-black rounded' />
        <textarea value={body} onChange={e=>setBody(e.target.value)} placeholder='نص' className='block w-full p-2 my-2 text-black rounded' />
        <button onClick={createPost} className='btn'>نشر</button>
      </div>

      <div>
        {posts.map(p=> (
          <div key={p.id} className='card mb-3'>
            <h3 className='text-lg'>{p.title}</h3>
            <p className='mt-2 text-sm opacity-80'>{p.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
