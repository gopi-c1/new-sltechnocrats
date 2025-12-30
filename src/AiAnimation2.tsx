import { useState } from "react";

function AiAnimations2() {
  const cards = [
    {
      title: "Deep Industry Expertise",
      description: "We understand your challenges and tailor solutions to fit your needs.",
      image: "https://i.ibb.co/ZRP9HVDn/pic14.gif"
    },
    {
      title: "Innovative AI Solutions",
      description: "Harness the power of AI to drive efficiency and transform your business.",
      image: "https://i.ibb.co/tP44yW8K/pic15.gif"
    },
    {
      title: "Customized Approach",
      description: "We create bespoke solutions that align with your specific gaols.",
      image:"https://i.ibb.co/5h1NRTyd/pic16.giff"
    },
    {
      title: "Long-Term Success Focus",
      description: "Our aim is to deliver rasults that keep your business ahead of the curve.",
      image: "https://i.ibb.co/5h1NRTyd/pic16.giff"
    },
    {
      title: "Seamless Integration",
      description: "We ensure smooth implementation with minimal disruption to your operations.",
      image: "https://i.ibb.co/ZRP9HVDn/pic14.gif"
    },
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
      <h3 className="text-black text-center text-4xl font-semibold pt-20 leading-14">
        We're the best fit for your needs because we know your 
        <br />
        challenges and pain areas. This is Why We're 'Different.</h3>
      <div className="relative max-w-5xl mx-auto overflow-hidden">

        <button
          onClick={prev}
          className="absolute top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full bg-white shadow
                     flex items-center justify-center text-xl"
        >
          ❮
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full bg-white shadow
                     flex items-center justify-center text-xl "
        >
          ❯
        </button>

        <div
          className="flex gap-10 transition-transform duration-500 ease-in-out py-36 ml-12"
          style={{
            transform: `translateX(-${index * (100 / visibleCards)}%)`
          }}>
          {cards.map((card, i) => (
            <div
              key={i}
              className="min-w-72 bg-white rounded-2xl p-5 shadow-md h-96"
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

      </div>
    </div>
  );
}

export default AiAnimations2
