export type ReferentielItem={ id:string; discipline:string; level:string; competency:string; content:string; source_id:string; source_version:string; page_reference:string|null };
export type SourceState="draft"|"source_linked"|"validated";
export function resolveSourceState(items:ReferentielItem[]):SourceState{ if(!items.length) return "draft"; return items.every(i=>i.source_id&&i.source_version&&i.page_reference)?"source_linked":"draft"; }
