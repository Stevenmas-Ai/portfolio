-- Run this in the Supabase SQL editor (Dashboard -> SQL -> New query).
-- Stores a backup of every contact-form submission.

create table if not exists public.contacts (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null,
  message    text not null,
  created_at timestamptz not null default now()
);

-- Lock the table down. Inserts happen server-side with the
-- service-role key, which bypasses RLS, so no public policy is needed.
alter table public.contacts enable row level security;

create index if not exists contacts_created_at_idx
  on public.contacts (created_at desc);
