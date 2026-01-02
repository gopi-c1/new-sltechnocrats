import { useState } from "react";


function WhyChoose2() {
    const Service =[
        {
            title: "AI Strategy Consulting",
            description: "Expert advice to help business create and implement AI strategies that align with their goals and enhance operations.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"Mechine Learning & Deep Learning Solutions ",
            description: "Custom-build machine learning models and deep learning algorithms that improve decision-marking and predictive capabilities.",
            image:"https://i.ibb.co/C5YjHG5y/pic10.png",
        },
        {
            title:"Natural Language Processing (NLP)",
            description:"AI tools for understanding and generating human language. including chatbots, sentiment analysis,and voice recognition systems.",
            image:"https://i.ibb.co/Kxgp4Cc3/pic11.png",
        },
        {
            title:"Cognitive Computing",
            description: "AI systems designed to simulate human thought processes, enabling smarter solutions and better decision-marking.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"AI-Powered Automation",
            description: "intelligent automation tools to streamline workflows,enhance productivity, and reduce manual tasks.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"Computer Vision ",
            description: "AI-driven-solutions for visual data processing, including image and object recognition, and facial recognition technologies.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"AI for Data Analytics ",
            description: "Advanced AI technologies that help businesses extract actionable insights from large datasets, enabling data-driven decision-marking.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
    ];

     const [currentIndex, setcurrentIndex] = useState(0);
     const cardsToShow = 3;

     const nextSlide = () => {
        if (currentIndex + cardsToShow < Service.length) {
            setcurrentIndex( currentIndex + 1 );
        }
     };

     const prevSlide = () => {
        if ( currentIndex > 0 ) {
            setcurrentIndex(currentIndex - 1);
        }
     };

  return (
    <div className="w-full px-10 py-10 bg-gray-100 relative ">
     <img src="https://i.ibb.co/5p5V7NN/pic8.png" alt="logo" 
     className="w-10 h-48 object-contain ml-10" />
     <h3 className="text-black text-5xl font-semibold -mt-28 ml-24 ">
       What AI services do we offer?</h3>

     <div className="grid md:grid-cols-3 gap-8 p-20">
        {Service
        .slice(currentIndex, currentIndex + cardsToShow )
        .map((Service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-7 flex flex-col items-center transition-all duration-300">
                <img src={Service.image}
                alt={Service.title}
                className="w-full h-48 object-cover rounded-xl mb-5 "/>
                <h3 className="text-2xl font-semibold mb-3 text-black ">{Service.title}</h3>
                <p className="text-gray-600 text-center text-xl">{Service.description}</p>
            </div>
        ))}
     </div>
     <div className="flex justify-center gap-6">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full !bg-white shadow flex items-center justify-center text-black">
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full !bg-white shadow flex items-center justify-center text-black">
           ›
        </button>
      </div>
    </div>
  )
}

export default WhyChoose2