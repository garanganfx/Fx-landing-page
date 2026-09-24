create extension if not exists "uuid-ossp";

create table if not exists public.site_settings (
  id uuid primary key default uuid_generate_v4(),
  key text not null unique,
  value jsonb not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.pricing_tiers (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  badge text,
  price text not null,
  period text,
  description text,
  highlight boolean not null default false,
  button_text text not null,
  button_link text,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.testimonials (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  location text,
  initials text not null,
  roi text,
  rating integer not null default 5,
  text text not null,
  sort_order integer not null default 0,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.faqs (
  id uuid primary key default uuid_generate_v4(),
  question text not null,
  answer text not null,
  sort_order integer not null default 0,
  active boolean not null default true,
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

create trigger site_settings_updated_at
before update on public.site_settings
for each row execute function public.handle_updated_at();

create trigger pricing_tiers_updated_at
before update on public.pricing_tiers
for each row execute function public.handle_updated_at();

create trigger testimonials_updated_at
before update on public.testimonials
for each row execute function public.handle_updated_at();

create trigger faqs_updated_at
before update on public.faqs
for each row execute function public.handle_updated_at();

alter table public.site_settings enable row level security;
alter table public.pricing_tiers enable row level security;
alter table public.testimonials enable row level security;
alter table public.faqs enable row level security;

create policy "Public read site_settings" on public.site_settings for select using (true);
create policy "Public read pricing_tiers" on public.pricing_tiers for select using (true);
create policy "Public read testimonials" on public.testimonials for select using (true);
create policy "Public read faqs" on public.faqs for select using (true);

create policy "Public insert site_settings" on public.site_settings for insert with check (true);
create policy "Public insert pricing_tiers" on public.pricing_tiers for insert with check (true);
create policy "Public insert testimonials" on public.testimonials for insert with check (true);
create policy "Public insert faqs" on public.faqs for insert with check (true);

create policy "Public update site_settings" on public.site_settings for update using (true) with check (true);
create policy "Public update pricing_tiers" on public.pricing_tiers for update using (true) with check (true);
create policy "Public update testimonials" on public.testimonials for update using (true) with check (true);
create policy "Public update faqs" on public.faqs for update using (true) with check (true);

create policy "Public delete site_settings" on public.site_settings for delete using (true);
create policy "Public delete pricing_tiers" on public.pricing_tiers for delete using (true);
create policy "Public delete testimonials" on public.testimonials for delete using (true);
create policy "Public delete faqs" on public.faqs for delete using (true);

insert into public.site_settings (key, value)
values (
  'hero',
  '{
    "badge": "ALGO TRADING MT4 & MT5 • VERIFIED PRO",
    "headline": "Trading Otomatis dengan Manajemen Risiko Terukur",
    "subheadline": "Expert Advisor (EA) institusional berbasis Price Action & Momentum tanpa Martingale berbahaya. Dirancang khusus untuk trader pemula maupun prop-firm trader yang mendambakan pertumbuhan portofolio konsisten.",
    "primary_cta_text": "Lihat Bukti Performa",
    "primary_cta_link": "#bukti-performa",
    "secondary_cta_text": "Pilihan Paket Lisensi",
    "secondary_cta_link": "#pilihan-paket"
  }'::jsonb
)
on conflict (key) do nothing;
