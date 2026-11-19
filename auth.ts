import { createSupabaseServerClient } from "@/lib/supabase/server";
export type Profil={ id:string; email:string; full_name:string|null; role:"teacher"|"director"|"super_admin"|"validator"|"referential_admin"; organization_id:string|null };
export async function getCurrentProfile():Promise<Profil|null>{ const supabase=createSupabaseServerClient(); const {data:{user}}=await supabase.auth.getUser(); if(!user) return null; const {data}=await supabase.from("profiles").select("id,email,full_name,role,organization_id").eq("id",user.id).single(); return data ?? null; }
