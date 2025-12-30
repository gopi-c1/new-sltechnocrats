import AiAnimation from "./AiAnimation"
import ClientStories from "./ClientStories"
import Details from "./Details"
import DigitalAgency from "./DigitalAgency"
import Image from "./Image"
import OurService from "./OurService"
import Started from "./Started"
import StateSelection from "./StateSelection"

function Home() {
    return (
        <li>
            <Image />
            <OurService />
            <Started />
            <StateSelection />
            <AiAnimation />
            <ClientStories />
            <DigitalAgency />
            <Details />
        </li>
    )
}

export default Home
