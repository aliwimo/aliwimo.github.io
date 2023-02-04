import styled from "styled-components";
import variables from "@/assets/variables";
import palette from "@/assets/palette";

const Style = styled.div`
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;

	button {
		display: block;
		font-size: 0.9rem;
		text-align: center;
		cursor: pointer;
		margin: 0 auto;
		background-color: ${palette.dark.background.darker};
		color: ${palette.dark.foreground.dimmed};
		padding: 0.5rem 0.75rem;
		border-radius: 0.5rem;
		border: none;
		transition: all ${variables.transitionDuration} ease-out;

		@media (max-width: ${variables.breakPoint.md}) {
			position: fixed;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&:hover {
			color: ${palette.dark.foreground.base};
		}
	}

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

		@media (max-width: ${variables.breakPoint.md}) {
			max-width: unset;
			max-height: unset;
			width: 100%;
			height: 100%;
			flex-direction: column;
			justify-content: flex-start;
		}

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

			@media (max-width: ${variables.breakPoint.md}) {
				position: unset;
				width: 100%;
				background-color: unset;
				
			}
		}

		.resume {
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			width: 65%;
			height: 100%;
			margin-left: 35%;
			opacity: ${(props) => (props.resumeIsShown ? "1" : "0")};
			transition: opacity ${variables.transitionDuration} ease-out;
			z-index: 4;

			@media (max-width: ${variables.breakPoint.md}) {
				background-color: ${palette.dark.background.base};
				position: fixed;
				margin-left: 0;
				width: 100%;
				z-index: ${(props) => (props.resumeIsShown ? "6" : "4")};
			}

			button {
				display: none;

				@media (max-width: ${variables.breakPoint.md}) {
					display: block;
				}
			}

			.view {
				flex: 1;
				overflow-y: auto;
			}
		}
	}
`;

export default Style;
