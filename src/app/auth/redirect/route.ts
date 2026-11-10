import { NextResponse } from "next/server";
import { getCurrentProfile } from "@/lib/auth";
import { hasActiveAccess } from "@/lib/access";
import { createSupabaseServerClient } from "@/lib/supabase/server";
export async function GET(request:Request){ const profile=await getCurrentProfile(); const origin=new URL(request.url).origin; if(!profile) return NextResponse.redirect(`${origin}/login`); if(profile.role==="super_admin") return NextResponse.redirect(`${origin}/administration`); const supabase=createSupabaseServerClient(); if(!(await hasActiveAccess(supabase,profile.id))) return NextResponse.redirect(`${origin}/activation`); return NextResponse.redirect(`${origin}/tableau-de-bord`); }
