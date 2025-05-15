import { createClient } from '@/utils/supabase/server';
export default async function providers() {
  const supabase = await createClient();
  const { data: providers } = await supabase.from("providers").select();
  return <pre>{JSON.stringify(providers, null, 2)}</pre>
}   