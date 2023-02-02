import Title from "@/components/resume/Title";
import Field from "./Field";
import data from "./data.json";

const Education = () => {
	return (
		<>
			<Title title="Education" />
			{data.map((item) => {
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
		</>
	);
};

export default Education;
