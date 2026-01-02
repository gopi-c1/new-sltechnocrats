import { useState } from "react";

function AiAnimation4() {
  const cards = [
    {
      title: "Custom Machine Learning Models",
      description: "Tailored machine learning solutions that address your specific business needs, from predictive analytics to customer segmentation.",
      image: "https://i.ibb.co/ZRP9HVDn/pic14.gif"
    },
    {
      title: "Data Analysis & Preprocessing",
      description: "High-quality data cleaning, transformation, and feature engineering to ensuring accurate and efficient machine learning models.",
      image: "https://i.ibb.co/tP44yW8K/pic15.gif"
    },
    {
      title: "Model Training & Optimization ",
      description: "Training advanced algorithms and fine tuning models for maximum performance and accuracy.",
      image:"https://i.ibb.co/5h1NRTyd/pic16.giff"
    },
    {
      title: "AI-Powered Automation",
      description: "Implementing machine learning solutions that automate routine tasks, improve decision-making, and enhance operational efficiency.",
      image: "https://i.ibb.co/5h1NRTyd/pic16.giff"
    },
     {
      title: "Predictive Analytics",
      description: "Leveraging machine learning to forecast trends, improve business strategies, and make data-driven decisions.",
      image: "https://i.ibb.co/5h1NRTyd/pic16.giff"
    },
     {
      title: "Model Deployment & Integration",
      description: "Seamless integration of machine learning models into your existing systems for real-time insights and performance.",
      image: "https://i.ibb.co/5h1NRTyd/pic16.giff"
    },
     {
      title: "Consulting & Strategy",
      description: "Expert advice on how to leverage machine learning to drive business growth and tranform your operations.",
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
       What We Offer at SL Technocrats?</h3>
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
