import { useState } from "react";


function WhyChoose3() {
    const Service =[
        {
            title: "Cloud Strategy & Consulting",
            description: "Tailored strategies to help you choose the right cloud environment and optimize resources for cost-effectiveness and performance.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"Cloud Migration",
            description: "Seamless migration of your data, applications, and systems to the cloud with minimal disruption and enhanced scalability.",
            image:"https://i.ibb.co/C5YjHG5y/pic10.png",
        },
        {
            title:"Cloud Application Development",
            description:"Custom cloud-based applications designed for flexibility, scalability, and efficiency, enabling real-time access to data and resources.",
            image:"https://i.ibb.co/Kxgp4Cc3/pic11.png",
        },
        {
            title:"Cloud Infractructure Management",
            description: "End-t-end management of your cloud infrastructure, ensuringsecurity, uptime, and optimization for peak performance.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"Cloud Security Solutions",
            description: "Advanced security protocols and encryption techniques to safeguard your data and applications in the cloud.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"Cloud Data Storage & Backup",
            description: "Scalable, secure cloud storage and automated backup solutions to protect your critical data with reliable recovery options.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"Cloud Analytics & Reporting",
            description: "Utilize cloud-powered analytics tools to valuable insights from your data, helping you make informed business decisions.",
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
       What Cloud Computing Services We Offer ?</h3>

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

export default WhyChoose3