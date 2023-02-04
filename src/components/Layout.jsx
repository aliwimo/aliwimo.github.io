import { useState } from "react";
import Home from "@/components/home/Home";
import Navigation from "@/components/resume/Navigation";
import Education from "@/components/resume/education/Education";
import Experience from "@/components/resume/experience/Experience";
import Skills from "@/components/resume/skills/Skills";
import Style from "@/components/Layout.style";

const Layout = () => {
	const [resumeIsShown, setResumeIsShown] = useState(false);
	const [currentSection, setCurrentSection] = useState("education");

	const resumeToggleHandler = () => {
		setResumeIsShown(!resumeIsShown);
	};

	const changeSectionHandler = (section) => {
		setCurrentSection(section);
	};

	let section = <h3>Wrong Section!</h3>;
	if (currentSection === "education") {
		section = <Education />;
	} else if (currentSection === "experience") {
		section = <Experience />;
	} else if (currentSection === "skills") {
		section = <Skills />;
	}

	return (
		<Style resumeIsShown={resumeIsShown}>
			<div className="container">
				<div className="main">
					<Home />
					<button type="button" onClick={resumeToggleHandler}>
						{resumeIsShown ? "Hide" : "Show"} Resume
					</button>
				</div>
				{/* {resumeIsShown ?   */}
				<div className="resume">
					<div className="navigation">
						<Navigation changeSectionHandler={changeSectionHandler} />
					</div>
					<div className="view">{section}</div>
					<button type="button" onClick={resumeToggleHandler}>
						{resumeIsShown ? "Hide" : "Show"} Resume
					</button>
				</div>
				{/* : null } */}
			</div>
		</Style>
	);
};

export default Layout;
