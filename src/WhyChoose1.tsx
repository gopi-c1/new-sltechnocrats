import { useState } from "react";


function WhyChoose1() {
    const Service =[
        {
            title: "Tailored Solutions to Fit Your Business Needs",
            description: "We don't belive in one-size-fits-all. SL Technocrat delivers customized app development services that align eith your specific business requirments, ensuring the final product is exactly what you need.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"Expertise Across Platforms",
            description: "Whether it's iOS, android, or cross-platform, our experienced developers have the skills and knoeledge to build high-quality apps that work seamlessly across all devices.",
            image:"https://i.ibb.co/C5YjHG5y/pic10.png",
        },
        {
            title:"Scalable and Secure Applications",
            description:"We focus on building scalable apps that grow with your business. Our development process ensures robust security measures are in please,keeping your app and user data safe.",
            image:"https://i.ibb.co/Kxgp4Cc3/pic11.png",
        },
        {
            title:"End-to-End Service",
            description: "FRom conceptualization and design to development, testing and deployment, SL Technocrat handles every aspect of your app development journey, providing a comprehensive, hassle-free service.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"Proven Track Record of Success",
            description: "With numerous successful app launches and satisfied clients across industries, SL Technocrat has established a reputation for delivering exceptional apps that exceed exectations.",
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
        Why Choose SL Technocrats for App Development?</h3>

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

export default WhyChoose1