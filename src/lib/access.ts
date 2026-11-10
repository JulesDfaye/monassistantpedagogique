import type { createSupabaseServerClient } from "@/lib/supabase/server";
export const ACCESS_DURATION_DAYS=30;
export async function hasActiveAccess(supabase:ReturnType<typeof createSupabaseServerClient>,userId:string){ const {data}=await supabase.from("access_codes").select("id").eq("redeemed_by",userId).gt("expires_at",new Date().toISOString()).limit(1); return (data?.length??0)>0; }
