import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://urvpscyyqissgeywvpqe.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVydnBzY3l5cWlzc2dleXd2cHFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUxODczOTQsImV4cCI6MjA3MDc2MzM5NH0.-plJWovG6_KTgY5hNz_LhQYk7FdKuFdzjUryAHiZlqU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
