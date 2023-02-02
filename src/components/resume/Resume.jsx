import Card from "@/components/ui/Card";
import Education from "@/components/resume/education/Education";
import Work from "@/components/resume/work/Work";
import Skills from "./skills/Skills";

const Resume = () => {
	return (
		<Card>
			<Education />
			<Work />
			<Skills />
		</Card>
	);
};

export default Resume;