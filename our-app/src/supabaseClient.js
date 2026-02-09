import { createClient } from '@supabase/supabase-js';

// Use import.meta.env for Vite + Vercel compatibility
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://pplnhbeykfkzcpsscunk.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);