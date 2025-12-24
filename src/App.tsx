import TopBar from "./TopBar";
import "./index.css";
import Image from "./Image";
import OurService from "./OurService";
import Started from "./Started";
import StateSelection from "./StateSelection"
import AiAnimations from "./AiAnimation";
import ClientStories from "./ClientStories";
import DigitalAgency from "./DigitalAgency";

function App() {
  return (
    <div className="w-378.25 min-h-screen bg-gray-100">
      <TopBar />   
     <Image />
     <OurService />
     <Started />
     <StateSelection />
     <AiAnimations />
     <ClientStories />
     <DigitalAgency />
    </div>
  );
}

export default App;