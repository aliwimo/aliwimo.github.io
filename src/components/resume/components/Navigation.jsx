import palette from "@/assets/palette";
import variables from "@/assets/variables";
import { useState } from "react";
import styled from "styled-components";
import SvgIcon from "../../icons/SvgIcon";

const Navigation = (props) => {
	const [activeTab, setActiveTab] = useState("education");

	const changeTabHandler = (section) => {
		props.changeSectionHandler(section);
		setActiveTab(section);
	};


	return (
		<Style>
			<li
				className={activeTab === "education" ? "active" : null}
				onClick={() => {
					changeTabHandler("education");
				}}
			>
				<SvgIcon name="education" />
				<span>Education</span>
			</li>
			<li
				className={activeTab === "experience" ? "active" : null}
				onClick={() => {
					changeTabHandler("experience");
				}}
			>
				<SvgIcon name="work" />
				<span>Experience</span>
			</li>
			<li
				className={activeTab === "skills" ? "active" : null}
				onClick={() => {
					changeTabHandler("skills");
				}}
			>
				<SvgIcon name="skills" />
				<span>Skills</span>
			</li>
		</Style>
	);
};

const Style = styled.ul`
	position: sticky;
	top: 0;
	width: 100%;
	list-style: none;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-evenly;
	align-items: center;
	column-gap: 1rem;
	padding: 0.75rem 1rem;
	margin: 0;
	border-bottom: 1px solid ${palette.dark.background.base};

	li {
		flex-grow: 1;
    flex-basis: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		font-size: 0.7rem;
		text-transform: uppercase;
		color: ${palette.dark.foreground.dimmed};
		transition: color ${variables.transitionDuration} ease-out;
		cursor: pointer;
		
		svg {
			fill: ${palette.dark.foreground.dimmed};
			margin-bottom: 0.25rem;
			transition: fill ${variables.transitionDuration} ease-out;
		}

		&:hover {
			color: ${palette.dark.foreground.base};
			
			svg {
				fill: ${palette.dark.foreground.base};
			}
		}
		
		&.active {
			color: ${palette.dark.foreground.base};
			
			svg {
				fill: ${palette.dark.foreground.base};
			}

			&::after {
				position: absolute;
				content: "";
				width: 1.5rem;
				height: 2px;
				border-radius: ${variables.borderRadius.sm};
				background-color: ${palette.dark.foreground.base};
				bottom: 0;
			}
		}

	}


`;

export default Navigation;
