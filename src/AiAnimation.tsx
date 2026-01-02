import { useState } from "react";

function AiAnimation() {
  const cards = [
    {
      title: "Discovery & Planning",
      description: "We begin by understanding your business needs, goals, and target audience to craft  a strategic plan.",
      image: "https://i.ibb.co/ZRP9HVDn/pic14.gif"
    },
    {
      title: "Design & Prototyping",
      description: "Our designers create wireframes and prototypes to visualize structure and user interface of your website.",
      image: "https://i.ibb.co/tP44yW8K/pic15.gif"
    },
    {
      title: "Development & Implementation",
      description: "Our developers turn designs into a functional website ensuring security, performance, and scalability .",
      image:"https://i.ibb.co/5h1NRTyd/pic16.giff"
    },
    {
      title: "Testing & QA",
      description: "We rigorously test every element of your website to ensure it meets quality standards for performance, security, and usability.",
      image: "https://i.ibb.co/ZRP9HVDn/pic14.gif"
    },
    {
        title: "Launch & Ongoing Supper",
        description: "After launch, we provide ongoing maintenance and support to keep your website up-to-date and running smothly.",
        image: "https://i.ibb.co/tP44yW8K/pic15.gif"
    }
  ];

  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const next = () => {
    if (index < cards.length - visibleCards) setIndex(index + 1);
  };

  return (
    <div className="w-full bg-gray-50 ">
      <div className="relative max-w-5xl mx-auto overflow-hidden">

      <button
  onClick={prev}
  className="absolute -left-2 top-1/2 -translate-y-1/2 
             w-12 h-12 rounded-full !bg-white shadow 
             flex items-center justify-center text-2xl text-black">
  ❮
</button>


        <div
          className="flex gap-10 transition-transform duration-500 ease-in-out py-36 ml-12"
          style={{
            transform: `translateX(-${index * (100 / visibleCards)}%)`
          }}>
          {cards.map((card, i) => (
            <div
              key={i}
              className="min-w-72 bg-white rounded-2xl p-8 shadow-md h-96"
            >
                <img 
                   src={card.image}
                   alt={card.title}
                   className="w-20 h-20 object-cover rounded-xl mb-4"/>

              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                
                {card.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <button
  onClick={next}
  className="absolute -right-4 top-1/2 -translate-y-1/2 
             w-12 h-12 rounded-full !bg-white shadow 
             flex items-center justify-center text-2xl text-black">
  ❯
</button>

      </div>
    </div>
  );
}

export default AiAnimation
