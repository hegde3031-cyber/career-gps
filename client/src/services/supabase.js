import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  "https://qzgvxnphvmguyrjgivyt.supabase.co";

const supabaseKey =
  "sb_publishable_gKct0Ccbf74kjBsOfAyzVA_il-ErylV";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);