create table public.access_codes (id uuid primary key default gen_random_uuid(), code text not null unique, redeemed_by uuid references public.profiles(id) on delete set null, redeemed_at timestamptz, expires_at timestamptz, created_at timestamptz not null default now());
create index access_codes_redeemed_by_idx on public.access_codes(redeemed_by);
alter table public.access_codes enable row level security;
create policy "access_codes_select_own_or_super" on public.access_codes for select using (redeemed_by = auth.uid() or public.is_super_admin());
