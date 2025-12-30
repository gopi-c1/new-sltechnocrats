import { Routes, Route } from "react-router-dom";
import TopBar from "./TopBar";
import "./index.css";
import AiAnimation1 from "./AiAnimation1";
import Details from "./Details";
import WebDevelopment from "./WebDevelopment";
import Integration from "./Integration";
import WhyChoose from "./WhyChoose";
import Structured from "./Structured";
import GetStarted from "./Getstarted";
import WebSite from "./WebSite";
import AppDevelopment from "./AppDevelopment";
import Enhance from "./Enhance";
import WhyChoose1 from "./WhyChoose1";
import AiAnimation from "./AiAnimation";
import GetStarted1 from "./GetStarted1";
import WebSite1 from "./Websites1";
import Home from "./Home";
import ArtificialInteligence from "./ArtificialInteligence";
import Reshaping from "./Reshaping";
import WhyChoose2 from "./WhyChoose2";
import AiAnimations2 from "./AiAnimation2";
import GetStarted2 from "./GetStarted2";
import WebSite2 from "./WebSite2";
import CloudComputing from "./CloudComputing";
import CloudService from "./CloudServices";
import WhyChoose3 from "./whyChoose3";
import CardSlider from "./CardSlider";
import AiAnimation3 from "./AiAnimation3";
import GetStarted3 from "./GetStarted3";
import WebSite3 from "./WebSite3";
import DeepLearning from "./DeepLearning";
import DeepLearningServices from "./DeepLearningServices";
import WhyChoose4 from "./WhyChoose4";
import AiAnimation4 from "./AiAnimations4";
import GetStarted4 from "./GetStarted4";
import WebSite4 from "./WebSite4";
import MachineLearning from "./MachineLearning";
import MachineLearningBusiness from "./MachineLearningBusiness";
import WhyChoose5 from "./WhyChoose5";
import AiAnimations5 from "./AiAnimations5";
import GetStarted5 from "./GetStarted5";
import WebSite5 from "./WebSite5";
import PrivacyPolicy from "./PrivacyPolicy";
import About from "./About";
import AboutSl from "./AboutSl";
import StateSelection1 from "./StateSelection1";
import AiAnimation6 from "./AiAnimation6";
import ClientStories from "./ClientStories";
import DigitalAgency from "./DigitalAgency";
import Contact from "./Contact";
import ContactUS from "./ContactUS";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TopBar />

      <Routes>
        <Route
          path="/"
          element={
            <>
            <TopBar />
              <Home />
            </>
          }
        />

        <Route
          path="/web-development"
          element={
            <>
              <WebDevelopment />
              <Integration />
              <WhyChoose />
              <Structured />
              <AiAnimation />
              <GetStarted />
              <WebSite />
              <Details />
            </>
          }
        />

        <Route
        path="/app-development"
        element={
          <>
          <AppDevelopment />
          <Enhance />
          <WhyChoose1 />
          <AiAnimation1 />
          <GetStarted1 />
          <WebSite1 />
          <Details />
          </>
        } />

        <Route 
        path="artificial-intelligence"
        element={
          <>
          <ArtificialInteligence />
          <Reshaping />
          <WhyChoose2 />
          <AiAnimations2 />
          <GetStarted2 />
          <WebSite2 />
          <Details />
          </>
        }/>

        <Route 
        path="cloud-computing"
        element={
          <>
          <CloudComputing />
          <CloudService />
          <WhyChoose3 />
          <CardSlider />
          <AiAnimation3 />
          <GetStarted3 />
          <WebSite3 />
          <Details />
          </>
        }/>

        <Route 
        path="deep-learning" 
        element={
        <>
        <DeepLearning />
        <DeepLearningServices />
        <WhyChoose4 />
        <AiAnimation4 />
        <GetStarted4 />
        <WebSite4 />
        <Details />
        </>}/>

        <Route 
        path="machine-learning"
        element={
        <>
        <MachineLearning />
        <MachineLearningBusiness />
        <WhyChoose5 />
        <AiAnimations5 />
        <GetStarted5 />
        <WebSite5 />
        <Details />
        </>}/>

        <Route 
        path="about"
        element={
          <>
          <About />
          <AboutSl />
          <StateSelection1 />
          <AiAnimation6 />
          <ClientStories />
          <DigitalAgency />
          <Details />
          </>
        }/>

        <Route 
        path="contact-us"
        element={
          <>
          <Contact />
          <ContactUS />
          <Details />
          </>
        }/>

        <Route path="/privacy-policy" element={<><PrivacyPolicy /><Details /></>} />

        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
