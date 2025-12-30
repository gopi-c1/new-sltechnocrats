import { useState } from "react";


function WhyChoose5() {
    const Service =[
        {
            title: "Proven Expertise",
            description: "Our team has a strong track record of successfully deploying machine learning solutions across industries, delivering measurable results and business impact.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"Custom-Tailored Approach",
            description: "We understand that every business is unique, so we craft machine learning models that specifically designed to address your challenges and goals.",
            image:"https://i.ibb.co/C5YjHG5y/pic10.png",
        },
        {
            title:"End-to End Solutions",
            description:"From data collection to model deployment and optimization, we provide comprehensive machine learning services to ensure your success.",
            image:"https://i.ibb.co/Kxgp4Cc3/pic11.png",
        },
        {
            title:"Future-Ready",
            description: "We stay of the curve with the latest advancements in AI and machine learning your business is always leveraging the best and most efficient technologies.",
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
     <h3 className="text-black text-4xl font-semibold -mt-28 ml-24 ">
      Why Choose SL Technocrats for Machine Learning Services?</h3>

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
          className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-200">
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center hover:bg-gray-200">
           ›
        </button>
      </div>
    </div>
  )
}

export default WhyChoose5