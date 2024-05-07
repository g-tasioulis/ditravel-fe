import React from "react";
import "./tours.css";
const tours = () => {
  return (
    <div className="bg-white min-h-screen py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Tours</h1>
        <div className="flex justify-center space-x-4 mb-6 border-b">
          <button
            className="tab text-lg font-semibold pb-2 "
            style={{ position: "relative" }}
          >
            One day tours
          </button>
          <button className="tab text-lg font-semibold pb-2 ">
            Multi day tours
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
          <TourCard
            image="https://placehold.co/300x200.png?text=Athens+Acropolis"
            title="Mini Athens Tour"
            description="Highlights Changing of the Guard at the Parliament, Monument of the Unknown Soldier, National Library, University, Academy of Athens, Arch..."
            duration="3 hours"
            language="English"
            price="210€"
            freeCancellation={true}
          />
          <TourCard
            image="https://placehold.co/300x200.png?text=Sunio+Cape"
            title="Sounio Cape Tour"
            description="Highlights Temple of Poseidon, Vouliagmeni Lake, Sunset at the Temple, Scenic drive along the Athenian Riviera. (Recommended for sunset) One-day..."
            duration="5 hours"
            language="English"
            price="250€"
            freeCancellation={true}
          />
          <TourCard
            image="https://placehold.co/300x200.png?text=Athens+Tour"
            title="Athens Tour"
            description="Highlights Acropolis, Temple of Zeus, Changing of the Guard, Presidential Residence, Old Parliament, Tomb of the Unknown Soldier, National Library..."
            duration="6 hours"
            language="English"
            price="270€"
            freeCancellation={true}
          />
        </div>
      </div>
    </div>
  );
};

function TourCard({
  image,
  title,
  description,
  duration,
  language,
  price,
  freeCancellation,
}) {
  return (
    <div className="bg-white p-4 shadow rounded">
      <img
        src={image}
        alt={`Placeholder image for ${title}`}
        className="rounded mb-4"
      />
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700 text-sm mb-4">{description}</p>
      <div className="flex items-center text-sm mb-4">
        <i className="far fa-clock mr-2"></i>
        {duration}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center text-sm">
          <i className="fas fa-language mr-2"></i>
          Language: {language}
        </div>
        {freeCancellation && (
          <div className="flex items-center text-sm">
            <i className="fas fa-check-circle mr-2"></i>
            Free Cancellation
          </div>
        )}
      </div>
      <div className="text-right font-semibold">{price}</div>
    </div>
  );
}

export default tours;
