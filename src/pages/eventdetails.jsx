// src/pages/EventDetails.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Tree Plantation Drive",
    description: "Help us plant trees across the city.",
    date: "Oct 15, 2025",
    location: "Central Park",
  },
  {
    id: 2,
    title: "Blood Donation Camp",
    description: "Donate blood and save lives.",
    date: "Oct 20, 2025",
    location: "City Hospital",
  },
  {
    id: 3,
    title: "Teach Underprivileged Kids",
    description: "Support kids by teaching basic math & science.",
    date: "Oct 25, 2025",
    location: "Community Center",
  },
];

function EventDetails() {
  const { id } = useParams();
  const event = events.find((e) => e.id === parseInt(id));

  if (!event) return <p>Event not found.</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">{event.title}</h1>
      <p>{event.description}</p>
      <p>
        <strong>Date:</strong> {event.date}
      </p>
      <p>
        <strong>Location:</strong> {event.location}
      </p>
      <Link
        to={`/apply/${event.id}`}
        className="mt-4 inline-block bg-green-500 text-white px-3 py-1 rounded"
      >
        Apply to Volunteer
      </Link>
    </div>
  );
}

export default EventDetails;
