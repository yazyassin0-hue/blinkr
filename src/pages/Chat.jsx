import React, {useEffect, useState, useRef} from 'react';
import { supabase } from '../lib/supabaseClient';
import { useTranslation } from 'react-i18next';

function Bubble({m, me}){
  return (
    <div style={{display:'flex', justifyContent: me ? 'flex-start' : 'flex-end', padding:'4px'}}>
      <div style={{maxWidth:'70%', padding:'10px 12px', borderRadius:16, background: me ? 'linear-gradient(90deg,#e6fbfa,#dff7f6)' : 'linear-gradient(90deg,#0ea5a0,#0b8f8a)', color: me ? '#000' : '#fff' }}>
        <div style={{fontSize:13, opacity:0.95}}>{m.body}</div>
      </div>
    </div>
  );
}

export default function Chat(){
  const [messages,setMessages]=useState([]);
  const [text,setText]=useState('');
  const [count,setCount]=useState(0);
  const bottomRef = useRef();
  const { t } = useTranslation();

  async function load(){
    if(useDemo){ const msgs = await DemoBackend.fetchMessages(); setMessages(msgs); setCount(DemoBackend.getCounts().messages); return; }
    const { data } = await supabase.from('messages').select('*').order('created_at',{ascending:true});
    setMessages(data||[]);
    // count logic if supabase...
  }

  useEffect(()=>{ load(); const iv = setInterval(load, 2500); return ()=>clearInterval(iv); }, []);

  async function send(){
    if(!text) return;
    if(useDemo){ await DemoBackend.sendMessage({from:'You', body:text}); setText(''); load(); return; }
    await supabase.from('messages').insert([{ body:text }]);
    setText(''); load();
  }

  return (
    <div className='container rtl'>
      <div className='flex justify-between items-center mb-4'>
        <h2 className='text-2xl'>{t('chat')}</h2>
        <div>Supachat: <strong>{count}</strong></div>
      </div>

      <div className='card' style={{height:360, overflowY:'auto'}} aria-live='polite'>
        {messages.map(m=> <Bubble key={m.id} m={m} me={m.from !== 'System'} />)}
        <div ref={bottomRef} />
      </div>

      <div className='mt-2 flex gap-2'>
        <input value={text} onChange={e=>setText(e.target.value)} className='flex-1 p-2 text-black rounded' />
        <button onClick={send} className='btn'>إرسال</button>
      </div>
    </div>
  );
}
