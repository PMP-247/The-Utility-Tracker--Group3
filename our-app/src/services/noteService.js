import { supabase } from '../supabaseClient';

/**
 * FETCH: Gets all reports for the currently logged-in user.
 * Sorted by newest first.
 */
export const getMyReports = async () => {
  try {
    const { data, error } = await supabase
      .from('notes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error in getMyReports:", error.message);
    return [];
  }
};

/**
 * INSERT: Saves a new report to the database.
 * Automatically links the report to the current user's ID.
 */
export const createReport = async (category, description) => {
  try {
    // 1. Get the current user session
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      throw new Error("No authenticated user found. Please log in.");
    }

    // 2. Insert the data into the 'notes' table
    const { data, error } = await supabase
      .from('notes')
      .insert([
        {
          user_id: user.id,
          category: category,
          description: description,
          // If your column is named 'content' instead of 'description', 
          // change the key name above to 'content'
        }
      ])
      .select(); 

    if (error) throw error;
    return data;
  } catch (error) {
    console.error("Error in createReport:", error.message);
    throw error;
  }
};