import styled from "styled-components";
import Title from "@/components/resume/Title";
import Tag from "@/components/resume/skills/Tag";
import { programmingSkills } from "@/assets/data";

const Programming = () => {
	return (
		<Style>
			<Title title="Programming Skills" />
			{programmingSkills.map((item, i) => {
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

export default Programming;
