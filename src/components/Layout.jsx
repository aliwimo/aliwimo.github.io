import { useState } from "react";
import styled from "styled-components";
import Home from "./home/Home";
import Resume from "./resume/Resume";
import palette from "@/assets/palette";
import variables from "@/assets/variables";

const Layout = () => {
	const [resumeIsShown, setResumeIsShown] = useState(false);

	const resumeToggleHandler = () => {
		setResumeIsShown(!resumeIsShown);
	};

	return (
		<Style resumeIsShown={resumeIsShown}>
			<div className="container">
				<div className="main">
					<Home />
					<button type="button" onClick={resumeToggleHandler}>
						Show Resume
					</button>
				</div>
				<div className="resume"><Resume /></div>
			</div>
		</Style>
	);
};

const Style = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	.container {
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		width: 95%;
		height: 90%;
		max-height: 30rem;
		max-width: 60rem;
		border-radius: ${variables.borderRadius.lg};
		overflow: hidden;
		background-color: #1d1d1d;

		.main {
			position: absolute;
			left: 0;
			height: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			background: #1f1f1f;
			transition: all ${variables.transitionDuration} ease-out;
			width: ${(props) => (props.resumeIsShown ? "35%" : "100%")};
			z-index: 5;

			button {
				display: block;
				font-size: 0.9rem;
				text-align: center;
				cursor: pointer;
				margin: 0 auto;
				background-color: ${palette.dark.background.dark};
				color: ${palette.dark.foreground.dimmed};
				padding: 0.5rem 0.75rem;
				border-radius: 0.5rem;
				border: none;
				transition: all ${variables.transitionDuration} ease-out;

				&:hover {
					color: ${palette.dark.foreground.base};
				}
			}
		}

		.resume {
			width: 65%;
			height: 100%;
			margin-left: 35%;
			overflow-y: auto;
			opacity: ${(props) => (props.resumeIsShown ? "1" : "0")};
			transition: opacity ${variables.transitionDuration} ease-out;
			z-index: 4;
		}
	}
`;

export default Layout;
