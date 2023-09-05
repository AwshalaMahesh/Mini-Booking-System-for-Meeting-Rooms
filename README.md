# Mini-Booking-System-for-Meeting-Rooms

A simple web-based Meeting Room Booking System that allows users to view available meeting rooms, book rooms, view their bookings, and manage bookings.

## Features

- **Display Available Rooms**: Lists all available meeting rooms. Each room has a unique identifier, and users can view the current booking status for each room.

- **Booking a Room**: Users can select a room and choose a time slot to book it. Time slots are in increments of 30 minutes (e.g., 9:00-9:30, 9:30-10:00, etc.). Once booked, the time slot becomes unavailable for that specific room.

- **Viewing Bookings**: Users can view all of their current bookings. The view displays the room name and the booked time slot.

- **Editing and Canceling Bookings**: Users have the option to modify the time or cancel their booking. When a booking is canceled, the time slot becomes available for others.

- **Conflict Handling**: The system prevents double-booking of rooms. If a user tries to book a room that's already reserved for a specific time slot, they receive an alert.

## Getting Started

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/meeting-room-booking-system.git