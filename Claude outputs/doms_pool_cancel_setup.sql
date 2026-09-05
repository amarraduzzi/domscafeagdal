-- Dom's Café — staat toe dat boekingen verwijderd (geannuleerd) kunnen worden
-- Draai dit in Supabase's SQL Editor (project "doms-cafe"), na doms_pool_setup.sql

create policy "Anyone can delete a booking"
  on bookings for delete
  to anon
  using (true);
