const SUPABASE_URL = "https://fbdtmcabgmkdwfzhpcxd.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_qzxpzbsfMf1hn6n3KCoECQ_Nk-AdR69";

window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);