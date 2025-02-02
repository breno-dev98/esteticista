import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import Hero from "./sections/HeroSection";
import ServicesSection from "./sections/ServicesSection";

export const Home = () => {
    return ( 
        <div>
            <Hero />
            <ServicesSection />
            <AboutSection />
            <ContactSection />
        </div>
     );
}