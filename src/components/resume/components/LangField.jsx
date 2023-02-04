import palette from "@/assets/palette";
import styled from "styled-components";

const LangField = (props) => {
	return (
		<Style>
			<div className="lang">{props.lang}</div>
			<div className="skills">
				<div className="skill">
					<div className="name">Reading / Writing</div>
					<div className="meter">{props.skills.read_write}</div>
				</div>
				<div className="skill">
					<div className="name">Speaking</div>
					<div className="meter">{props.skills.speak}</div>
				</div>
			</div>
		</Style>
	);
};

const Style = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	
	.lang {
		font-size: 1.1rem;
		font-weight: 600;
	}

	.skills {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		column-gap: 2rem;

		.skill{
			.name {
				color: ${palette.dark.foreground.dimmed};
				font-size: 0.8rem;
				font-style: italic;
			}

			.meter {
				text-transform: capitalize;
			}

		}
	}

`;

export default LangField;
