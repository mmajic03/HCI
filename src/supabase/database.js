import { createClient } from '@supabase/supabase-js';

// Inicijaliziraj Supabase klijenta
const supabase = createClient('https://gexylhqmqpshabhuigua.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdleHlsaHFtcXBzaGFiaHVpZ3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNTA5MTAsImV4cCI6MjA1MTkyNjkxMH0.edZDuMdZ97IQZBdflbe75a3tpU90RLncFtGvZv0fPAA');

// Funkcija za spremanje URL-a slike u bazu
export async function saveImageUrlToDatabase(userId, imageUrl) {
  const { data, error } = await supabase
    .from('users') // Zamijeni 'users' sa svojim nazivom tablice
    .update({ image: imageUrl }) // Ažuriranje stupca 'image'
    .eq('id', userId); // Ažuriraj korisnika s određenim ID-jem

  if (error) {
    console.error('Error saving image URL to database:', error);
    return null;
  }

  console.log('Image URL saved successfully:', data);
  return data;
}
