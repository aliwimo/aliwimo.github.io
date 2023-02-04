import styled from "styled-components";
import { languageSkills } from "@/assets/data";
import LangField from "../components/LangField";
import Title from "../components/Title";

const LanguageSkills = () => {
	return (
		<>
			<Title title="Languages" />
			<Style>
				{languageSkills.map((item, i) => {
					return <LangField key={i} lang={item.lang} skills={item.skills} />;
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
	column-gap: 5rem;
`;

export default LanguageSkills;
