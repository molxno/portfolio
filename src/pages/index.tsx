import React, {useEffect, useState} from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {aboutMeConfig} from "../data/aboutMe";
import Footer from "../components/Footer";
import TimelineSection from "../components/TimelineSection";
import ProjectsSection from "../components/ProjectsSection";
import SkillsSection from "../components/SkillsSection";
import {useI18n} from "../i18n";

type ToggleFunction = () => void;

const Home: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {language} = useI18n();

    const toggle: ToggleFunction = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const id = window.location.hash.replace(/^#/, "");
        if (!id) {
            return;
        }

        const timer = window.setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({block: "start"});
            }
        }, 50);

        return () => window.clearTimeout(timer);
    }, [language]);

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
