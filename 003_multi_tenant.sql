create table public.memberships (id uuid primary key default gen_random_uuid(), organization_id uuid not null references public.organizations(id) on delete cascade, user_id uuid not null references public.profiles(id) on delete cascade, role public.membership_role not null default 'teacher', joined_at timestamptz not null default now(), left_at timestamptz, unique (organization_id,user_id));
create index memberships_organization_idx on public.memberships(organization_id);
create index profiles_organization_idx on public.profiles(organization_id);
