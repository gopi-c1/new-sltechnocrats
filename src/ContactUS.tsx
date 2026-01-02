function ContactUS() {
  return (
    <div className="w-full min-h-screen bg-teal-950 py-20">

      <h2 className="text-5xl font-semibold text-teal-400 text-center">
        Contact Us
      </h2>
      <p className="mt-6 text-xl text-gray-200 text-center">
        Any question or remarks? Just write us a message!
      </p>

      <div className="max-w-6xl mx-auto mt-20 bg-white rounded-2xl shadow-lg flex overflow-hidden">

        <div className="w-2/5 bg-black p-10 text-white rounded-2xl m-6">
          <h3 className="text-3xl font-semibold">
            Contact Information
          </h3>
          <p className="mt-3 text-gray-300">
            Say something to start a live chat!
          </p>

          <div className="mt-24 space-y-6 text-lg">
            <p className="flex items-center gap-3">
              📞 <span>+91 95500 92856</span>
            </p>
            <p className="flex items-center gap-3">
              ✉️ <span>tech@sltechnocrats.net</span>
            </p>
            <p className="flex items-start gap-3">
              📍
              <span>
                797/A, Road No.36, CBI Colony, Jubilee Hills,
                Hyderabad, Telangana 500033
              </span>
            </p>

            <div className="flex gap-4 md:mt-0 pt-64">   
        <img
          src="https://i.ibb.co/PGsR7zv5/piv48.jpg"
          alt="twitter"
          className="w-6 h-6 cursor-pointer"/>
          
        <img
          src="https://i.ibb.co/DDmMcBrY/pic24.png"
          alt="Instagram"
          className="w-6 h-6 cursor-pointer"/>
          
          <img
          src="https://i.ibb.co/BKns27kW/pic48.jpg"
          alt="Discord"
          className="w-6 h-6 cursor-pointer"/>

            </div>
          </div>
        </div>

        <div className="w-3/5 p-12">
          <form className="space-y-10">

            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="block font-medium mb-2 text-black">First Name</label>
                <input
                  type="text"
                  placeholder="First Name..."
                  className="w-full border-b border-gray-400 outline-none py-2 text-black"
                />
              </div>

              <div>
                <label className="block font-medium mb-2 text-black">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name..."
                  className="w-full border-b border-gray-400 outline-none py-2 text-black"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2 text-black">Email</label>
              <input
                type="email"
                placeholder="Email..."
                className="w-full border-b border-gray-400 outline-none py-2 text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-2 text-black">Phone Number</label>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full border-b border-gray-400 outline-none py-2 text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-4 text-black">
                Select Subject?
              </label>
              <div className="flex gap-8">
                <label className="flex items-center gap-2 text-black">
                  <input type="radio" name="subject" />
                  General Inquiry
                </label>
                <label className="flex items-center gap-2 text-black">
                  <input type="radio" name="subject" />
                  Feedback
                </label>
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2 text-black">Message</label>
              <textarea
                placeholder="Write your message..."
                className="w-full border-b border-gray-400 outline-none py-2 text-black"
              ></textarea>
            </div>
            <button className="!bg-teal-600 w-80 ml-60">Send Message</button>

          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUS;
