import { supabase } from '$lib/supabaseClient';

export async function load() {
  const { data, error } = await supabase
    .from('vinyls')
    .select('id, vinylTitle, vinylImg')
    .order('id', { ascending: true });

  if (error) {
    console.error('Error fetching vinyls:', error);
    return { vinyls: [] };
  }

  return {
    vinyls: data
  };
}
