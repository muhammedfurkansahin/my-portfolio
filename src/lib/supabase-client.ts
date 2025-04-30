import { createClient } from '@supabase/supabase-js';

// Supabase URL ve Anon Key değerlerini ortam değişkenlerinden al
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://gljpjhfhbrkugcucuott.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsanBqaGZoYnJrdWdjdWN1b3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwNTA2NDIsImV4cCI6MjA2MTYyNjY0Mn0.rUj6Gn3NOBLWPWltMSHVaXvGD7GnRM3IzXu1R8ue6Qk';

// Supabase client oluştur
export const supabase = createClient(supabaseUrl, supabaseAnonKey); 