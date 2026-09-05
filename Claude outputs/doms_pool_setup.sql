-- Dom's Café — Dom's Pool table booking system
-- Run this entire script in Supabase's SQL Editor (new project "doms-cafe")

create table bookings (
  id uuid primary key default gen_random_uuid(),
  table_name text not null check (table_name in ('pool_1', 'pool_2', 'snooker')),
  booking_date date not null,
  start_time time not null,
  end_time time not null,
  customer_name text not null,
  customer_phone text,
  created_at timestamptz not null default now(),
  unique (table_name, booking_date, start_time)
);

alter table bookings enable row level security;

-- Anyone (guests on the booking page, staff using the same page) can create
-- a booking.
create policy "Anyone can insert a booking"
  on bookings for insert
  to anon
  with check (true);

-- Anyone can see which slots are taken and by whom (client decided the name
-- can show publicly), but NOT phone numbers — those stay staff-only via the
-- column grant below (RLS controls rows, GRANT controls columns).
create policy "Anyone can view bookings"
  on bookings for select
  to anon
  using (true);

revoke all on bookings from anon;
grant insert (table_name, booking_date, start_time, end_time, customer_name, customer_phone) on bookings to anon;
grant select (id, table_name, booking_date, start_time, end_time, customer_name) on bookings to anon;
