import { describe, expect, it } from "vitest";
import { localTemplateProvider } from "@/lib/ai/generator";
import { detectAction } from "@/lib/ai/agent";
const input={organization_id:"00000000-0000-0000-0000-000000000000",level:"CE2" as const,discipline:"Mathématiques",domain:"Domaine scientifique",lesson:"Multiplication des nombres entiers",competency:"Résoudre des problèmes simples",duration_minutes:60,class_size:30,is_multigrade:false,language:"fr" as const,mode:"automatic" as const};
describe("Générateur",()=>{ it("génère une fiche complète",async()=>{ const fiche=await localTemplateProvider.generateFiche(input,[]); expect(fiche.title).toContain("Multiplication"); expect(fiche.steps.length).toBeGreaterThan(0); }); });
describe("Agent",()=>{ it("détecte les exercices",()=>{ expect(detectAction("Génère cinq exercices")).toBe("generate_exercises"); }); });
