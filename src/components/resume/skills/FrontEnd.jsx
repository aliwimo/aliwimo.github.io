import styled from "styled-components";
import Title from "@/components/resume/Title";
import Tag from "@/components/resume/skills/Tag";
import { frontEndSkills } from "@/assets/data";

const FrontEnd = () => {
	return (
		<Style>
			<Title title="Front-End Skills" />
			{frontEndSkills.map((item, i) => {
				return <Tag key={i} name={item.skill} icon={item.icon} />;
			})}
		</Style>
	);
};

const Style = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 0.5rem;
`;

export default FrontEnd;
