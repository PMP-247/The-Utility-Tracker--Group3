import { supabase } from '../supabaseClient'; // This line fixes the 'supabase is not defined' error

// Function to fetch historical reports
export const getMyReports = async () => {
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching history:", error.message);
    return [];
  }
  return data;
};

// Function to create a new report
export const createReport = async (content, userId) => {
  const { data, error } = await supabase
    .from('notes')
    .insert([{ content, user_id: userId }]);

  if (error) {
    console.error("Error creating report:", error.message);
    throw error;
  }
  return data;
};