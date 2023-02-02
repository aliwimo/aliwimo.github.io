import Title from "@/components/resume/Title";
import Tag from "./Tag";
import { frontEndSkills, programmingSkills } from "./data";
import styled from "styled-components";

const Skills = () => {
	return (
		<Style>
			<Title title="Front-End Skills" />
			<div className="skills">
				{frontEndSkills.map((item, i) => {
					return <Tag key={i} name={item.skill} icon={item.icon} />;
				})}
			</div>
			<Title title="Programming Skills" />
			<div className="skills">
				{programmingSkills.map((item, i) => {
					return <Tag key={i} name={item.skill} icon={item.icon}/>;
				})}
			</div>
		</Style>
	);
};

const Style = styled.div`
	.skills {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
`;

export default Skills;
