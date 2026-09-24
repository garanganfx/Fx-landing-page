-- Supabase schema for FX Automation Club

create extension if not exists "uuid-ossp";

create table if not exists public.posts (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text not null,
  status text not null default 'draft' check (status in ('draft', 'published', 'archived')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger posts_updated_at
before update on public.posts
for each row
execute function public.handle_updated_at();

alter table public.posts enable row level security;

create policy "Allow public read access"
  on public.posts
  for select
  using (true);

create policy "Allow public insert access"
  on public.posts
  for insert
  with check (true);

create policy "Allow public update access"
  on public.posts
  for update
  using (true)
  with check (true);

create policy "Allow public delete access"
  on public.posts
  for delete
  using (true);
