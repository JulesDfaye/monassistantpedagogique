import type { Metadata } from "next";
import "./globals.css";
import PwaRegister from "@/components/PwaRegister";
export const metadata:Metadata={ title:"MON ASSISTANT PÉDAGOGIQUE IA – SÉNÉGAL", manifest:"/manifest.json" };
export default function RootLayout({children}:{children:React.ReactNode}){ return <html lang="fr"><body className="min-h-screen"><PwaRegister/>{children}</body></html>; }
