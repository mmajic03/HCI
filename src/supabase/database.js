import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://gexylhqmqpshabhuigua.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdleHlsaHFtcXBzaGFiaHVpZ3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNTA5MTAsImV4cCI6MjA1MTkyNjkxMH0.edZDuMdZ97IQZBdflbe75a3tpU90RLncFtGvZv0fPAA');


export async function saveImageUrlToDatabase(userId, imageUrl) {
  const { data, error } = await supabase
    .from('users') 
    .update({ image: imageUrl }) 
    .eq('id', userId); 

  if (error) {
    console.error('Error saving image URL to database:', error);
    return null;
  }

  console.log('Image URL saved successfully:', data);
  return data;
}
