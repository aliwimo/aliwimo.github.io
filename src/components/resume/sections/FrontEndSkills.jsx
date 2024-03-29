import styled from "styled-components";
import Title from "@/components/resume/components/Title";
import Tag from "@/components/resume/components/Tag";
import { frontEndSkills } from "@/assets/data";

const FrontEndSkills = () => {
	return (
		<>
			<Title title="Front-End Skills" />
			<Style>
				{frontEndSkills.map((item, i) => {
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

export default FrontEndSkills;
