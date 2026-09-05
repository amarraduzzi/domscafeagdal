-- Dom's Café — maakt customer_phone verplicht op de bestaande bookings-tabel
-- Draai dit in Supabase's SQL Editor (project "doms-cafe")

alter table bookings
  alter column customer_phone set not null;
