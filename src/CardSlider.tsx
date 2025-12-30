import { useState } from "react";

const cards = [
 { 
    title: "Cost Efficiency", 
    desc: "Our cloud solutions are designed to reduce costs by optimizing resource use and offering pay-as-you-go models,ensuring you get the best value.",
    image: "https://i.ibb.co/tppftBMf/pic38.gif" ,
 },
  { 
    title: "Enhanced Security", 
    desc: "we prioritize the security of your data with advanced encryption, regular audits, and compliance with industry standards to protect your sensitive information." ,
    image: "https://i.ibb.co/tppftBMf/pic38.gif",
 },
  { 
    title: "24/7 Support", 
    desc: "SL Technocrates provides ongoing support and maintenance, ensuring your cloud infrastructure remains optimized, secure , and available at all times." ,
    image: "https://i.ibb.co/zWChFVWh/pic39.gif",
 },
  { 
    title: "Expertise & Experience", 
    desc: "With years of experience in cloud computing, SL technocrates offers deep industry knowledge and tailored solutions to meet your specific business needs." ,
    image: "https://i.ibb.co/tppftBMf/pic38.gif",
 },
 { 
    title: "Custom Cloud Solutions", 
    desc: "We provide personalized cloud strategies, whether you need public, private, or hybid cloud environments, ensuring the perfect fit for your" ,
    image: "https://i.ibb.co/zWChFVWh/pic39.gif",
 },
 { 
    title: "Seamless Cloud Migration", 
    desc: "Our team ensures a smooth and secure migration to the cloud with minimal disruption, making your transition hassle-free." ,
    image: "https://i.ibb.co/Ld0v6fX1/pic40.gif",
 },
 { 
    title: "Scalable & Flexible Infrastucture", 
    desc: "Our cloud sloutions are designed to grow with your businesss, offering the scalability you need to stay competitive in a rapidly evolving market." ,
    image: "https://i.ibb.co/Ld0v6fX1/pic40.gif",
 },
];

export default function CardSlider() {
  const [start, setStart] = useState(0);

  const visibleCards = cards.slice(start, start + 3);

  const prev = () => {
    if (start > 0) setStart(start - 1);
  };

  const next = () => {
    if (start < cards.length - 3) setStart(start + 1);
  };

  return (
    <div className="bg-[#0f1f1f] py-20 relative">

      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white text-4xl ml-20"
      >
        ❮
      </button>

      <div className="max-w-5xl mx-auto grid grid-cols-3 gap-8">
        {visibleCards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-8 h-105 shadow-xl"
          >
            <img src={card.image} alt={card.title} 
            className="w-20 h-20 object-cover rounded-xl mb-4 ml-20"/>
            <h3 className="text-3xl font-bold mb-4 text-black">
              {card.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-xl">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white text-4xl mr-20"
      >
        ❯
      </button>
    </div>
  );
}
