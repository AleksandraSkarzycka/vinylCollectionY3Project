import { supabase } from '$lib/supabaseClient';

export async function load() {
  const { data, error } = await supabase
    .from('wishlist')
    .select('id, vinylTitle, vinylImg, vinylDesc, spotifyEmbed')
    .order('id', { ascending: true });

  if (error) {
    console.error(error);
    return { wishlist: [] };
  }

  return {
    wishlist: data
  };
}