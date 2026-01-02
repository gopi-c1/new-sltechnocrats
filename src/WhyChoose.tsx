import { useState } from "react";


function WhyChoose() {
    const Service =[
        {
            title: "Expert Team",
            description: "Our team of experienced developers,designers, and project managers work collaboratively to bring your vision to life.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"Tailored Solutions",
            description: "We understand that every business is unique, and we deliver despoke web solutions that align with your objectives.",
            image:"https://i.ibb.co/C5YjHG5y/pic10.png",
        },
        {
            title:"Modern Technologies",
            description:"We stay ahead of the curve, using the latest frameworks and technologies like React, Angular, and Node.js to create cutting-edge websites.",
            image:"https://i.ibb.co/Kxgp4Cc3/pic11.png",
        },
        {
            title:"User-Centered Design",
            description: "Our focus is always on creating seamless userexperiences that convert visitors into loyal customers.",
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
        Why Choose SL Technocrats for web Development?</h3>

     <div className="grid md:grid-cols-3 gap-8 p-20">
        {Service
        .slice(currentIndex, currentIndex + cardsToShow )
        .map((Service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl h-110 w-95 shadow-lg p-7 flex flex-col items-center transition-all duration-300">
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
          className="w-12 h-12 rounded-full !bg-white shadow flex text-2xl items-center justify-center text-black">
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

export default WhyChoose
