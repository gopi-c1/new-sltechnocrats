import { useState } from "react";

function AiAnimation6() {
  const cards = [
    {
      title: "Expertise & Innovation",
      description: "Our team combines deep industry knowlwdge with cutting-edge technologies to deliver impactful solutions tailored to your needs.",
      image: "https://i.ibb.co/ZRP9HVDn/pic14.gif"
    },
    {
      title: "Customized Solutions",
      description: "We offer despoke services desighed to address your specific business challenges and goals, ensuring maximum results.",
      image: "https://i.ibb.co/tP44yW8K/pic15.gif"
    },
    {
      title: "End-to-End",
      description: "From consultation to deployment and optimization, we provide comprehensive support every step of the way.",
      image:"https://i.ibb.co/5h1NRTyd/pic16.giff"
    },
    {
      title: "Scalability & Flexibility",
      description: "Our solutions are scalable and adaptabl, allowing your business to grow and evolve seamlessly with technology.",
      image: "https://i.ibb.co/5h1NRTyd/pic16.gif"
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
    <div className="w-full  ">
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

export default AiAnimation6
