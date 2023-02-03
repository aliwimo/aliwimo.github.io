import Section from "@/components/ui/Section";
import Divider from "@/components/ui/Divider";
import FrontEnd from "@/components/resume/skills/FrontEnd";
import Programming from "@/components/resume/skills/Programming";

const Skills = () => {
	return (
		<>
			<Section>
				<FrontEnd />
			</Section>
			<Divider />
			<Section>
				<Programming />
			</Section>
		</>
	);
};

export default Skills;
