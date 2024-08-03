import React, {useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {aboutMeConfig} from "../data/aboutMe";
import Footer from "../components/Footer";
import TimelineSection from "../components/TimelineSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";

type ToggleFunction = () => void;

const Home: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggle: ToggleFunction = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...aboutMeConfig} />
            <TimelineSection/>
            <ProjectsSection/>
            <SkillsSection/>
            <Footer/>
        </>
    );
};

export default Home;