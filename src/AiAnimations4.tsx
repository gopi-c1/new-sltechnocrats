import { useState } from "react";

function AiAnimation4() {
  const cards = [
    {
      title: "Expertise & Innovation",
      description: "With a team of skilled professionals, we leverage the latest deep learning technologies to deliver customized, cutting-edge solutions tailored to your unique business needs.",
      image: "https://i.ibb.co/ZRP9HVDn/pic14.gif"
    },
    {
      title: "Custom Solutions",
      description: "We design deep learning models that directly address your business challenges, whether it's preddictive analytics, image recognition, or natural language processing.",
      image: "https://i.ibb.co/tP44yW8K/pic15.gif"
    },
    {
      title: "Seamless Integration",
      description: "Our deep learning models integrate smoothly with your exsting systems, ensuring minimal disruption and maximum results.",
      image:"https://i.ibb.co/5h1NRTyd/pic16.giff"
    },
    {
      title: "Scalable & Future-Proof",
      description: "SL Technocrates offers deep learning solutions that grow with your business, ensuring flexibility and scalability as your data and requirments evolve.",
      image: "https://i.ibb.co/5h1NRTyd/pic16.giff"
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
    <div className="w-full ">
      <h3 className="text-black text-center text-4xl font-semibold pt-20 leading-14">
        We're the best fit for your needs because we know your 
        <br />
        challenges and pain areas. This is Why We're 'Different.</h3>
      <div className="relative max-w-5xl mx-auto overflow-hidden">

        <button
          onClick={prev}
          className="absolute top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full !bg-white shadow
                     flex items-center justify-center text-xl text-black">
          ❮
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                     w-10 h-10 rounded-full !bg-white shadow
                     flex items-center justify-center text-xl ml-10 text-black">
          ❯
        </button>

        <div
          className="flex gap-10 transition-transform duration-500 ease-in-out py-36 ml-10"
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

export default AiAnimation4
