import { createClient } from '@supabase/supabase-js';


export const supabase = createClient('https://gexylhqmqpshabhuigua.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdleHlsaHFtcXBzaGFiaHVpZ3VhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNTA5MTAsImV4cCI6MjA1MTkyNjkxMH0.edZDuMdZ97IQZBdflbe75a3tpU90RLncFtGvZv0fPAA');


export async function uploadImage(file) {
  const { data, error } = await supabase.storage
    .from('user-images') 
    .upload(`images/${file.name}`, file, {
      cacheControl: '3600',
      upsert: false,
    });

  if (error) {
    console.error('Error uploading image:', error);
    return null;
  }

  console.log('Image uploaded:', data.path);
  return data.path; 
}


export function getPublicImageUrl(path) {
  const { data } = supabase.storage.from('user-images').getPublicUrl(path);
  return data.publicUrl;
}

