import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wqlsisvbnlymhrdwjbxo.supabase.co'; // Your project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBwbG5oYmV5a2ZremNwc3NjdW5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjkyMDI2NzcsImV4cCI6MjA4NDc3ODY3N30.RfG8M5uxUPHYOBebivYmoqAB4skG4ZbmgnZ2GXJM45Q';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);