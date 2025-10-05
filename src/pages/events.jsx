// src/pages/Events.jsx
import React from "react";
import { Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Tree Plantation Drive",
    description: "Join us in greening the city.",
    date: "Oct 15, 2025",
  },
  {
    id: 2,
    title: "Blood Donation Camp",
    description: "Save lives by donating blood.",
    date: "Oct 20, 2025",
  },
  {
    id: 3,
    title: "Teach Underprivileged Kids",
    description: "Volunteer to teach basic subjects.",
    date: "Oct 25, 2025",
  },
];

function Events() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Upcoming NGO Events</h1>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="border rounded-xl shadow p-4 hover:shadow-lg"
          >
            <h2 className="font-bold text-lg mb-2">{event.title}</h2>
            <p>{event.description}</p>
            <p className="text-sm text-gray-500">{event.date}</p>
            <Link
              to={`/events/${event.id}`}
              className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
