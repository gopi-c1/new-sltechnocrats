import { useState } from "react";


function WhyChoose4() {
    const Service =[
        {
            title: "Image Recognition & Computer Vision",
            description: "AI-driven solutions for object detection, facial recognition, and image classification, improving processes like quality control, security, and automation.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"Predictive Analytics",
            description: "Leveraging deep learning to analyze historical data and predict future trends, helping businesses make informed, data driven decisions.",
            image:"https://i.ibb.co/C5YjHG5y/pic10.png",
        },
        {
            title:"Speech and Voice Recognition",
            description:"Implementing AI models for accurate sppech-to-text, voice commands, and automatched transcription services for better customer interaction and accessibility.",
            image:"https://i.ibb.co/Kxgp4Cc3/pic11.png",
        },
        {
            title:"Anomaly Detection",
            description: "Using deep learning to identify unusual patterns in data, helping with fraud detection, network security, and system monitoring.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"Reinforcement Learning",
            description: "AI models that continuously learn from interactions, optimizing strategies and decision-making processes in real-time.",
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
       Deep Learning Services We Offer at SL Technocrats</h3>

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

export default WhyChoose4