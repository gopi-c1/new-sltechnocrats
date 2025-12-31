import { Link } from "react-router-dom";

function Details() {
  return (
    <footer className="w-full bg-teal-950 text-white py-20  ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3">

        <div>
          <img
            src="https://i.ibb.co/NgLwPBJ2/pic7.png"
            alt="SL Technocrats"
            className="w-48 -ml-28"
          />
        </div>

        <div className="space-y-3 -ml-72">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>

          <p>Products : Smaro</p>

          <p>
            <a href="tel:9154943409" className="hover:underline">
              Contact Us : 91549 43409, 90529 90009
            </a>
          </p>

          <Link to="/privacy-policy" className="text-white hover:underline">
               Privacy Policy
          </Link>

          <h3 className="text-xl font-semibold mt-8">Support</h3>

         
            <a href="tel:9154943409" className="hover:underline">
              📞 Call : 91549 43409, 90529 90009
            </a>

            <a
              href="https://wa.me/919154943409"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline ml-5">
              💬 chat
            </a>
            
            <a
              href="mailto:support@sltechnocrats.net"
              rel="noopener noreferrer"
              className="hover:underline ml-5 relative z-50 cursor-pointer">
               ✉ Email
            </a>
         
        </div>

        <div className="space-y-3 -ml-96">
          <h3 className="text-xl font-semibold mb-4">About Us</h3>

          <p>Services</p>

          <p className="font-medium">Address :</p>

          <p className="leading-7">
            <a
              href="https://www.google.com/maps/search/?api=1&query=797/A+Road+No+36+CBI+Colony+Jubilee+Hills+Hyderabad+Telangana+500033" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline "
            >
              797/A, Road No.36, CBI cOlony, Jubilee Hills,Hyderabad, Telangana 500033
            </a>
          </p>
        </div>

      </div>

      <div className="border-t border-teal-700 mt-16 pt-6 ml-44 mr-44">
  <div className="flex flex-col md:flex-row items-center justify-between text-sm text-white">

    <p>
      © 2023 SL Technocrats. All Rights Reserved by SLT
    </p>

    <div className="flex gap-4 mt-4 md:mt-0">
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
        <img
          src="https://i.ibb.co/vvwZ8FnZ/pic22.png"
          alt="LinkedIn"
          className="w-6 h-6 cursor-pointer"/>
      </a>

      <a href="https://www.facebook.com/people/Smaro/61562958171431/" target="_blank" rel="noreferrer">
        <img
          src="https://i.ibb.co/WvwjPDYB/pic23.png"
          alt="Facebook"
          className="w-6 h-6 cursor-pointer"/>
      </a>

      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <img
          src="https://i.ibb.co/DDmMcBrY/pic24.png"
          alt="Instagram"
          className="w-6 h-6 cursor-pointer"/>
      </a>

      <a href="https://www.youtube.com/@Smaro90009" target="-blank" rel="noreferrer">
      <img src="https://i.ibb.co/hJbmP15m/pic26.png" 
      alt="youtube" 
      className="w-10 h-7 cursor-pointer -ml-0.5"/>
      </a>
    </div>
  </div>
</div>
    </footer>
  );
}

export default Details;
