import Title from "@/components/resume/components/Title";
import Field from "@/components/resume/components/field/Field";
import { courses } from "@/assets/data";

const Courses = () => {
	return (
		<>
			<Title title="Courses & Certification" />
			{courses.map((item, i) => {
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
		</>
	);
};

export default Courses;
