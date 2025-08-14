import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://icqjefaxvuaxmlgyusgc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljcWplZmF4dnVheG1sZ3V...';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);