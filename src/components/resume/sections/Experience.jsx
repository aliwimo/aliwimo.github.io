import Title from "@/components/resume/components/Title";
import Field from "@/components/resume/components/field/Field";
import Section from "@/components/resume/components/Section";
import { workExperience } from "@/assets/data";

const Experience = () => {
	return (
		<Section>
			<Title title="Work Experience" />
			{workExperience.map((item, i) => {
				return (
					<Field
						key={i}
						date={item.date}
						title={item.title}
						org={item.org}
						desc={item.desc}
					/>
				);
			})}
		</Section>
	);
};

export default Experience;
