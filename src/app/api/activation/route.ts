import { NextResponse } from "next/server";
import { z } from "zod";
import { ACCESS_DURATION_DAYS } from "@/lib/access";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { createSupabaseServerClient } from "@/lib/supabase/server";
const ActivationSchema=z.object({ code:z.string().min(4).max(64).transform(c=>c.trim().toUpperCase()) });
export async function POST(request:Request){ const supabase=createSupabaseServerClient(); const {data:{user}}=await supabase.auth.getUser(); if(!user) return NextResponse.json({error:"Authentification requise."},{status:401}); const parsed=ActivationSchema.safeParse(await request.json().catch(()=>null)); if(!parsed.success) return NextResponse.json({error:"Code invalide."},{status:400}); const now=new Date(); const expiresAt=new Date(now.getTime()+ACCESS_DURATION_DAYS*24*60*60*1000); const {data}=await createSupabaseAdminClient().from("access_codes").update({redeemed_by:user.id,redeemed_at:now.toISOString(),expires_at:expiresAt.toISOString()}).eq("code",parsed.data.code).is("redeemed_by",null).select("id").maybeSingle(); if(!data) return NextResponse.json({error:"Code invalide ou déjà utilisé."},{status:400}); return NextResponse.json({ok:true}); }
