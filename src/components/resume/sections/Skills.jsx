import Section from "@/components/resume/components/Section";
import Divider from "@/components/resume/components/Divider";
import FrontEndSkills from "@/components/resume/sections/FrontEndSkills";
import ProgrammingSkills from "@/components/resume/sections/ProgrammingSkills";

const Skills = () => {
	return (
		<>
			<Section>
				<FrontEndSkills />
			</Section>
			<Divider />
			<Section>
				<ProgrammingSkills />
			</Section>
		</>
	);
};

export default Skills;
