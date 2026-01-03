import { useState } from "react";


function OurService() {
    const Service =[
        {
            title: "Web Development",
            description: "Buil a strong online presence with our expert web development service, offering fast, responsive, and visually engaging websites designed to drive your business forward.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"App Development",
            description: "Unlock the power of mobile with custom app development solutions, creating intuitive, high-performance apps that enhance user experience and keep your audience engaged.",
            image:"https://i.ibb.co/C5YjHG5y/pic10.png",
        },
        {
            title:"UI/UX Design",
            description:"Crafting seamless, intuitive user interfaces and experiences that enhance engagement, ensuriong your users enjoy every interaction with your digital production.",
            image:"https://i.ibb.co/Kxgp4Cc3/pic11.png",
        },
        {
            title:"Cloud Services",
            description: "Unlock the potential of the cloud with scalable and secure cloud solutions that optimize your business operations, ensuring flexibility and cost-efficiency.",
            image:"https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"API Development & Integration",
            description: "Seamlessly integrate third-party services with custom API development, streamline your systems and enhancing your product's capabilities.",
            image: "https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title:"Database Development & Management",
            description: "Create and manage powerfull, secure databases that store and orgaqnize your data efficiently, ensuring fast access and reliable performance.",
            image: "https://i.ibb.co/VWFkkHy7/pic9.png",
        },
        {
            title: "Customization",
            description: "Tailor every aspect of your digital experience with our despoke customization services, from website features to app functionalities, ensuring your tech solutions perfectly match your brand's needs.",
            image: "https://i.ibb.co/VWFkkHy7/pic9.png",
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
    <div className="w-full py-10 bg-gray-100 relative ">
     <img src="https://i.ibb.co/5p5V7NN/pic8.png" alt="logo" 
     className="w-10 h-48 object-contain ml-28" />
     <h3 className="text-black text-4xl font-semibold -mt-28 ml-44 ">Our Service</h3>

     <div className="grid md:grid-cols-3 gap-8 p-20 ">
        {Service
        .slice(currentIndex, currentIndex + cardsToShow )
        .map((Service, index) => (
            <div
              key={index}
              className="bg-white h-120 w-100 rounded-2xl shadow-lg p-7 flex flex-col items-center transition-all duration-300">
                <img src={Service.image}
                alt={Service.title}
                className="w-full h-48 object-cover rounded-xl mb-5 "/>
                <h3 className="text-2xl font-semibold mb-3 text-black ">{Service.title}</h3>
                <p className="text-gray-600 text-xl text-left">{Service.description}</p>
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

export default OurService