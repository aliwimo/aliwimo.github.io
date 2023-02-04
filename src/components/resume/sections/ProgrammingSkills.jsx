import styled from "styled-components";
import Title from "@/components/resume/components/Title";
import Tag from "@/components/resume/components/Tag";
import { programmingSkills } from "@/assets/data";

const ProgrammingSkills = () => {
	return (
		<>
			<Title title="Programming Skills" />
			<Style>
				{programmingSkills.map((item, i) => {
					return <Tag key={i} name={item.skill} icon={item.icon} />;
				})}
			</Style>
		</>
	);
};

const Style = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 0.5rem;
`;

export default ProgrammingSkills;
