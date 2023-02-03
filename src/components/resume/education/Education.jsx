import Title from "@/components/resume/Title";
import Field from "./Field";
import Section from "@/components/ui/Section";
import { education } from "@/assets/data";


const Education = () => {
	return (
		<Section>
			<Title title="Education" />
			{education.map((item) => {
				return (
					<Field
						key={item.id}
						from={item.date.from}
						to={item.date.to}
						title={item.title}
						org={item.org}
						desc={item.desc}
					/>
				);
			})}
		</Section>
	);
};

export default Education;
