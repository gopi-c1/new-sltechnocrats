import { useState } from "react";

interface ContactUProps {
  firstName: string;
  LastName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
}

function ContactUS() {
  const [formData, setFormData] = useState<ContactUProps>({
    firstName: "",
    LastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);

  const handlechange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlesubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://api.smaro.app/api/common/contactUs",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setShowPopup(true);
        setFormData({
          firstName: "",
          LastName: "",
          email: "",
          phoneNumber: "",
          subject: "",
          message: "",
        });
      } else {
        setErrorPopup(true);
      }
    } catch (error) {
      console.error(error);
      setErrorPopup(true);
    }
  };

  return (
    <div className="w-full min-h-screen bg-teal-950 py-20">
      <h2 className="text-5xl font-semibold text-teal-400 text-center">
        Contact Us
      </h2>
      <p className="mt-6 text-xl text-gray-200 text-center">
        Any question or remarks? Just write us a message!
      </p>

      <div className="max-w-6xl mx-auto mt-20 bg-white rounded-2xl shadow-lg flex overflow-hidden">
        {/* LEFT SIDE */}
        <div className="w-2/5 bg-black p-10 text-white rounded-2xl m-6">
          <h3 className="text-3xl font-semibold">Contact Information</h3>
          <p className="mt-3 text-gray-300">
            Say something to start a live chat!
          </p>

          <div className="mt-24 space-y-6 text-lg">
            <p>📞 +91 95500 92856</p>
            <p>✉️ tech@sltechnocrats.net</p>
            <p>
              📍 797/A, Road No.36, CBI Colony, Jubilee Hills, Hyderabad,
              Telangana 500033
            </p>
          </div>
        </div>

        <div className="w-3/5 p-12">
          <form className="space-y-10" onSubmit={handlesubmit}>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <label className="block font-medium mb-2 text-black">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter firstName..."
                  value={formData.firstName}
                  onChange={handlechange}
                  className="w-full border-b outline-none py-2 text-black"
                />
              </div>

              <div>
                <label className="block font-medium mb-2 text-black">Last Name</label>
                <input
                  type="text"
                  name="LastName"
                  placeholder="enter LastName..."
                  value={formData.LastName}
                  onChange={handlechange}
                  className="w-full border-b outline-none py-2 text-black"
                />
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2 text-black">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email..."
                value={formData.email}
                onChange={handlechange}
                className="w-full border-b outline-none py-2 text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-2 text-black">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                placeholder="Enter Your Number..."
                value={formData.phoneNumber}
                onChange={handlechange}
                className="w-full border-b outline-none py-2 text-black"
              />
            </div>

            <div>
              <label className="block font-medium mb-4 text-black">Select Subject</label>
              <div className="flex gap-8">
                <label className="flex gap-2 text-black">
                  <input
                    type="radio"
                    name="subject"
                    value="General Inquiry"
                    checked={formData.subject === "General Inquiry"}
                    onChange={handlechange}
                  />
                  General Inquiry
                </label>

                <label className="flex gap-2 text-black">
                  <input
                    type="radio"
                    name="subject"
                    value="Feedback"
                    checked={formData.subject === "Feedback"}
                    onChange={handlechange}
                  />
                  Feedback
                </label>
              </div>
            </div>

            <div>
              <label className="block font-medium mb-2 text-black">Message</label>
              <textarea
                name="message"
                placeholder="Enter Message..."
                value={formData.message}
                onChange={handlechange}
                className="w-full border-b outline-none py-2 text-black"
              />
            </div>

            <button
  type="submit"
  className="!bg-teal-600 hover:!bg-teal-700 !text-white px-10 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg cursor-pointer transition-all duration-200"
>
  Send Message
</button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl text-center w-96">
            <h3 className="text-2xl font-semibold text-green-600">
              Successfully Submitted 
            </h3>
            <p className="mt-3 text-gray-600">
              We will contact you soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 bg-teal-600 text-white px-6 py-2 rounded-lg"
            >
              OK
            </button>
          </div>
        </div>
      )}

      {errorPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl text-center w-96">
            <h3 className="text-2xl font-semibold text-red-600">
              Submission Failed 
            </h3>
            <button
              onClick={() => setErrorPopup(false)}
              className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUS;
