// Sample meeting room data
const meetingRooms = [
    { id: 1, name: 'Room A' },
    { id: 2, name: 'Room B' },
    { id: 3, name: 'Room C' },
    { id: 4, name: 'Room D' },
];

const bookings = [];

document.addEventListener('DOMContentLoaded', () => {
    const roomList = document.getElementById('room-list');
    const roomSelect = document.getElementById('room');
    const userBookingsList = document.getElementById('user-bookings');

    // Populate the room select dropdown
    meetingRooms.forEach(room => {
        const option = document.createElement('option');
        option.value = room.id;
        option.textContent = room.name;
        roomSelect.appendChild(option);
    });

    // Function to update available and booked rooms
    const updateRooms = () => {
        const selectedDate = document.getElementById('date').value;
        const selectedTime = document.getElementById('time').value;
        const availableRooms = meetingRooms.filter(room => {
            const isBooked = bookings.some(booking => {
                return booking.room === room.id && booking.date === selectedDate && booking.time === selectedTime;
            });
            return !isBooked;
        });

        roomList.innerHTML = ''; // Clear the room list

        availableRooms.forEach(room => {
            const listItem = document.createElement('li');
            listItem.textContent = `Available: ${room.name}`;
            roomList.appendChild(listItem);
        });

        bookings.forEach(booking => {
            if (booking.date === selectedDate && booking.time === selectedTime) {
                const room = meetingRooms.find(room => room.id === booking.room);
                const listItem = document.createElement('li');
                listItem.textContent = `Booked: ${room.name}`;
                roomList.appendChild(listItem);
            }
        });
    };

    // Function to update user's bookings list
    const updateUserBookings = () => {
        userBookingsList.innerHTML = ''; // Clear the user's bookings list
        const userId = parseInt(roomSelect.value);

        bookings.forEach(booking => {
            if (booking.room === userId) {
                const room = meetingRooms.find(room => room.id === booking.room);
                const listItem = document.createElement('li');
                listItem.textContent = `Room: ${room.name}, Time: ${booking.date} ${booking.time}`;
                userBookingsList.appendChild(listItem);
            }
        });
    };

    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const selectedRoomId = parseInt(roomSelect.value);
        const selectedDate = document.getElementById('date').value;
        const selectedTime = document.getElementById('time').value;

        if (!selectedRoomId || !selectedDate || !selectedTime) {
            alert('Please fill in all the fields.');
            return;
        }

        // Check for double-booking
        const isDoubleBooking = bookings.some(booking => {
            return booking.room === selectedRoomId && booking.date === selectedDate && booking.time === selectedTime;
        });

        if (isDoubleBooking) {
            alert('The room is already booked for the selected time slot.');
            return;
        }

        // Add the booking
        bookings.push({ room: selectedRoomId, date: selectedDate, time: selectedTime });

        // Update the available and booked rooms list
        updateRooms();

        // Update the user's bookings list
        updateUserBookings();

        // Reset the form
        bookingForm.reset();
    });

    // Initial update of available and booked rooms
    updateRooms();

    // Update user's bookings list
    roomSelect.addEventListener('change', updateUserBookings);
});
