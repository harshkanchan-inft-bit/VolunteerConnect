function VolunteerCard({ title, description }) {
  return (
    <div className="border rounded-xl shadow p-4 hover:shadow-lg">
      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p>{description}</p>
      <button className="mt-2 bg-blue-500 text-white px-3 py-1 rounded">Apply</button>
    </div>
  );
}

export default VolunteerCard;