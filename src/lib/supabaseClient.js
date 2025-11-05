import { createClient } from '@supabase/supabase-js'

// هذا الرابط والمفتاح يستخدمان مشروعًا عامًا للتجربة
const supabaseUrl = 'https://kpxxogozkvemcxkhrxwp.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtweHhvZ296a3ZlbWN4a2hyeHdwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgwNzcyNzksImV4cCI6MjAxMzY1MzI3OX0.4V4J9D9mJx1Fh7P1yI05JrGkmzJxXUdSC9B6nO-5D9Y'

// إنشاء عميل Supabase للتطبيق
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
