import Card from "@/components/ui/Card";
import Education from "@/components/resume/education/Education";
import Work from "@/components/resume/work/Work";
import Skills from "./skills/Skills";
import Navigation from "./Navigation";
import { useState } from "react";
import styled from "styled-components";

const Resume = () => {
	const [currentSection, setCurrentSection] = useState("education");

	const changeSectionHandler = (section) => {
		setCurrentSection(section);
	};

	let section = <h3>Wrong Section!</h3>;
	if (currentSection === "education") {
		section = <Education />;
	} else if (currentSection === "experience") {
		section = <Work />;
	} else if (currentSection === "skills") {
		section = <Skills />;
	}

	return (
		<Style>
			<Navigation changeSectionHandler={changeSectionHandler} />
			<Card>{section}</Card>
		</Style>
	);
};

const Style = styled.div`
	position: relative;
`;

export default Resume;
