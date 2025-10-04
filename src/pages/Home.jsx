import VolunteerCard from "../components/VolunteerCard";

function Home() {
  const opportunities = [
    { title: "Teach Kids", description: "Help children with basic education." },
    { title: "Community Clean-Up", description: "Join hands to clean local areas." },
    { title: "Animal Shelter", description: "Support stray animals and shelters." },
  ];

  return (
    <div className="p-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
      {opportunities.map((opp, i) => (
        <VolunteerCard key={i} title={opp.title} description={opp.description} />
      ))}
    </div>
  );
}

export default Home;