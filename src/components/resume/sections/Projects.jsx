import Section from "@/components/resume/components/Section";
import Title from "@/components/resume/components/Title";
import Field from "@/components/resume/components/field/Field";
import { projects } from "@/assets/data";

const Projects = (props) => {
	return (
		<Section>
			<Title title="Machine Learning Projects" />
			{projects.map((item, i) => {
				return (
					<Field
						key={i}
						title={item.title}
						desc={item.desc}
						link={item.link}
					/>
				);
			})}
		</Section>
	);
};

export default Projects;
