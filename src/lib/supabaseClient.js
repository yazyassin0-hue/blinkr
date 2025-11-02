// Supabase client scaffold.
// For demo mode we fall back to a local simulated backend (DemoMode).
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const useDemo = !SUPABASE_URL || !SUPABASE_ANON_KEY;

export const supabase = useDemo ? null : createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Simple demo backend (in-memory)
export const DemoBackend = (() => {
  let posts = [
    { id: 1, title: 'مرحبًا بكم في Blinkr!', body: 'هذا منشور تجريبي' },
    { id: 2, title: 'Hello from Blinkr', body: 'Demo post in English' }
  ];
  let messages = [
    { id:1, from:'System', body:'أهلًا! هذا اختبار Supachat.' }
  ];
  let nextPostId = 3;
  let nextMsgId = 2;
  return {
    async fetchPosts(){ return posts.slice().reverse(); },
    async createPost(p){ p.id = nextPostId++; posts.push(p); return p; },
    async fetchMessages(){ return messages.slice(); },
    async sendMessage(m){ m.id = nextMsgId++; messages.push(m); return m; },
    getCounts(){ return { posts: posts.length, messages: messages.length } }
  };
})();
