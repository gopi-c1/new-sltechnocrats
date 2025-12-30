function PrivacyPolicy() {
  return (
    <div className="w-screen min-h-screen bg-gray-100 pt-32 pb-16">
      
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md px-8 py-10">
        
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-700 leading-relaxed mb-6">
          This Privacy Policy (“Privacy Policy”) applies to the access and use of all 
          of our web and mobile-based applications (collectively referred to as “Platforms”) 
          and our products and services provided through the Platforms (“Services”). The 
          Platforms are owned, managed, and operated by SL Technocrats Private Limited, 
          having its registered office at Flat No. 202, Uday Royal Crest, Kothaguda, Hyderabad-500084
          (hereinafter referred to as “us”/ “we”/ “SL Technocrats”/ “Company”).
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Consent
        </h2>
        <p className="text-gray-700 leading-relaxed">
          By accessing and using our Services or providing us with personal information, 
          you agree to the terms of this Privacy Policy. Your use of our Services and any 
          personal information shared with us is subject to the terms of this Privacy Policy and our Terms of Use.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Collection of Personal Information
        </h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Demographic information like name, gender, age, and occupation.</li>
          <li>Contact information such as address (including country and ZIP/postal code), email ID, and mobile number.</li>
          <li>Financial information (including details of payment instruments).</li>
          <li>Medical records and history for Patients as uploaded by Doctors or Patients.</li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Cookies
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Cookies are small files stored on your device to collect information and improve our 
          service. Most web browsers are set to accept cookies by default. You can set your browser 
          to reject cookies, but certain features may be unavailable.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Disclosure of Personal Information
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We may disclose personal information to contractors, service providers, 
          and others bound by confidentiality agreements, as required by law or to protect rights and safety.
        </p>
        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          Security
        </h2>
        <p className="text-gray-700 leading-relaxed">
          SL Technocrats adopts reasonable security practices to protect your data from unauthorized access. 
          However, we are not responsible for unauthorized third-party access due to causes beyond our control.
        </p>
         <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
          User’s Rights
         </h2>
         <p className="text-gray-700 leading-relaxed">
          Users have the right to access, modify, and delete their personal information. 
          To exercise these rights, contact us at {""}
          <a 
          href="mailto:tech.sltechnocrats.net"
          className="text-blue-600 hover:underline font-medium">
            tech.slt@sltechnocrats.net
          </a>.
         </p>
          <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-2">
            Amendments
          </h2>
           <p className="text-gray-700 leading-relaxed">
             SL Technocrats reserves the right to amend this Privacy Policy. Your continued use of our services implies acceptance of these changes.
             <br /><br />
             For any questions or concerns, contact us at{" "}
             <a
             href="mailto:tech.slt@sltechnocrats.net"
             className="text-blue-600 hover:underline font-medium">
             tech.slt@sltechnocrats.net
             </a>.
          </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
