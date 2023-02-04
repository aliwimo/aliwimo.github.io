import Courses from "@/components/resume/sections/Courses";
import Title from "@/components/resume/components/Title";
import Field from "@/components/resume/components/field/Field";
import Section from "@/components/resume/components/Section";
import { education } from "@/assets/data";

const Education = () => {
	return (
		<>
			<Section>
				<Title title="Education" />
				{education.map((item, i) => {
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

			<Section>
				<Courses />

			</Section>
		</>
	);
};

export default Education;
