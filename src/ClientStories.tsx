function ClientStories() {
  return (
    <div className="bg-teal-950 w-full py-20">
      <h2 className="text-teal-400 text-center text-5xl font-semibold mb-16">
        Check Our Client Stories
      </h2>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">

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

export default ClientStories;
