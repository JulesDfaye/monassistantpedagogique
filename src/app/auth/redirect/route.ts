import { NextResponse } from "next/server";
import { getCurrentProfile } from "@/lib/auth";
export async function GET(request:Request){ const profile=await getCurrentProfile(); const origin=new URL(request.url).origin; if(!profile) return NextResponse.redirect(`${origin}/login`); if(profile.role==="super_admin") return NextResponse.redirect(`${origin}/administration`); return NextResponse.redirect(`${origin}/tableau-de-bord`); }
