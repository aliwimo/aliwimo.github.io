import Title from "@/components/resume/Title";
import Field from "@/components/resume/experience/Field";
import Section from "@/components/ui/Section";
import { workExperience } from "@/assets/data";

const Experience = () => {
	return (
		<Section>
			<Title title="Work Experience" />
			{workExperience.map((item) => {
				return <Field key={item.id} from={item.date.from} to={item.date.to} title={item.title} org={item.org} desc={item.desc}/>;
			})}
		</Section>
	);
};

export default Experience;
