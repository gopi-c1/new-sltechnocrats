import { use, useState } from "react";

function WebSite2() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);

  return (
    <div className="bg-teal-950 min-h-screen py-20 px-6">
      <h3 className="text-white text-5xl font-semibold text-center mb-16 leading-16">
        Learn More About Our <br />
        Interactive Website <br />
        Development Service
      </h3>

      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden">
        <button
          onClick={() => setOpen1(!open1)}
          className="w-full h-20 flex justify-between items-center bg-gray-100 px-6 py-5"
        >
          <h4 className="text-xl font-semibold text-white ">
            What is cloud computing, and how can it benefit my business? 
          </h4>

          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-teal-600 text-teal-600 text-2xl font-bold">
            {open1 ? "−" : "+"}
          </div>
        </button>

        {open1 && (
          <div className="bg-gray-100 px-6 py-6 text-gray-700">
           Cloud computing provides on-demand access to computing resources 
           over the internet, helping businesses scale, reduce costs, and 
           improve security and collaboration.
          </div>
        )}
      </div>

      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden mt-10">
        <button onClick={() => setOpen2(!open2)}
            className="w-full h-20 flex justify-between items-center bg-white px-6 py-5">
                <h4 className="text-xl font-semibold text-white">
                    What cloud deploymentmodels do you offer?
                </h4>
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-teal-600 text-teal-600 text-2xl font-bold">
                    {open2 ? "-" : "+"}
                </div>
            </button>
            {open2 && (
                <div className="bg-gray-100 px-6 py-6 text-gray-700">
                    SL Technocrats offers public, private, and hybrid cloud deployment 
                    models to meet your business needs, providing flexibility and optimal performance.
             </div>
            )}
      </div>

      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden mt-10">
        <button onClick={() => setOpen3(!open3)}
            className="w-full h-20 flex justify-between items-center bg-white px-6 py-5">
                <h4 className="text-xl font-semibold text-white">
                    How does cloud migration work at SL Technocrats?
                </h4>
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-teal-600 text-teal-600 text-2xl font-bold">
                    {open3 ? "-" : "+"}
                </div>
            </button>
            {open3 && (
                <div className="bg-gray-100 px-6 py-6 text-gray-700">
                    We ensure a smooth migration by securely moving your data and 
                    applications to the cloud with minimal disruption, making your
                    transition seamless.
             </div>
            )}
      </div>

      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden mt-10">
        <button onClick={() => setOpen4(!open4)}
            className="w-full h-20 flex justify-between items-center bg-white px-6 py-5">
                <h4 className="text-xl font-semibold text-white">
                    What cloud security measures does SL Technocrats provide?
                </h4>
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-teal-600 text-teal-600 text-2xl font-bold">
                    {open4 ? "-" : "+"}
                </div>
            </button>
            {open4 && (
                <div className="bg-gray-100 px-6 py-6 text-gray-700">
                   We implement advanced cloud security solutions, including 
                   encryption, identity management, and compliance, to keep your 
                   data safe and secure.
             </div>
            )}
      </div>

      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden mt-10">
        <button onClick={() => setOpen5(!open5)}
            className="w-full h-20 flex justify-between items-center bg-white px-6 py-5">
                <h4 className="text-xl font-semibold text-white">
                    Can SL Technocrates help optimizemy cloud infrastructure?
                </h4>
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-teal-600 text-teal-600 text-2xl font-bold">
                    {open5 ? "-" : "+"}
                </div>
            </button>
            {open5 && (
                <div className="bg-gray-100 px-6 py-6 text-gray-700">
                    Yes, we offer cloud optimization services to improve performance, 
                    reduce costs, and ensure your cloud environment operates efficiently.
             </div>
            )}
      </div>

      <div className="max-w-4xl mx-auto rounded-xl overflow-hidden mt-10">
        <button onClick={() => setOpen6(!open6)}
            className="w-full h-20 flex justify-between items-center bg-white px-6 py-5">
                <h4 className="text-xl font-semibold text-white">
                    How caan i scale my cloud infrastructure with SL Technocrats?
                </h4>
                <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-teal-600 text-teal-600 text-2xl font-bold">
                    {open6 ? "-" : "+"}
                </div>
            </button>
            {open6 && (
                <div className="bg-gray-100 px-6 py-6 text-gray-700">
                    Our scalable cloud solutions grow with your business, 
                    allowing you to easily adjust resources to meet changing demands.
             </div>
            )}
      </div>

      <h2 className="text-teal-400 text-center text-5xl font-semibold mb-16 mt-40">
        Check Our Client Stories
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-40">

        <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col justify-between">

          <div>
            <h3 className="text-blue-500 text-4xl font-semibold mb-4">
              Innovative Mobile Solutions
            </h3>
            <p className="text-gray-700 leading-relaxed text-xl">
              Working with SL Technocrats was a game-changer for our mobile app
              project. From the initial concept to the final launch, their team 
              prrovided expert guidance and innovative solutions. the app they 
              developed exceeded our expectations in both performance and user 
              experience. we've seen a significant increase in engagment and 
              customer satisfaction! 
            </p>
          </div>

          <div className="w-60 h-0.5 bg-teal-600 mt-15"></div>
          
          <div className="border-t mt-8 pt-6 flex items-center gap-4">

            <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xl">
              R
            </div>

            <div>
              <p className="font-semibold text-gray-900 text-2xl">Rajesh Kumar,CEO</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col justify-between">
          
          <div>
            <h3 className="text-blue-500 text-4xl font-semibold mb-4">
              Scalable App Development
            </h3>
            <p className="text-gray-600 leading-relaxed text-xl">
              SL Technocrats understood our vision and deliverd a seamless, secure, 
              and scalable mobile app thet has helped streamline our operations. 
              their commitment to quality and attention to detail made the entire
              development process smooth and efficient. i highly recommend them 
              to anyone looking for top-notch app development
            </p>
          </div>

          <div className="w-60 h-0.5 bg-teal-600 mt-15"></div>
          <div className="border-t mt-8 pt-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-2xl">Samantha Lee,CTO</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center">
  <div className="bg-white rounded-2xl p-8 shadow-xl flex flex-col justify-between max-w-xl w-full">
    
    <div>
      <h3 className="text-blue-500 text-4xl font-semibold mb-4">
        Agile App Delivery 
      </h3>
      <p className="text-gray-600 leading-relaxed text-xl">
        From the first consultation to the final deployment, SL Technocrat was
        a reliable partner throughtout our app developmentjourney. their Agile
        development approch allowed us to quickly adapt and deliver an app that
        meets our user's needs. The app is fast, secure, and user-friendly. their 
        expertise made all the difference!
      </p>
    </div>

    <div className="w-60 h-0.5 bg-teal-600 mt-15"></div>

    <div className="border-t mt-8 pt-6 flex items-center gap-4">
      <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-xl">
        M
      </div>
      <div>
        <p className="font-semibold text-gray-900 text-2xl">Michael johnson, Product Manager</p>
      </div>
    </div>

  </div>
</div>

      </div>
    </div>
  );
}

export default WebSite2
