import palette from "@/assets/palette";
import styled from "styled-components";

const Name = () => {
	return (
		<Style>
			<div className="username">aliwimo</div>
			<div className="name">Mohamed Aliwi</div>
			<div className="description">Software Developer</div>
		</Style>
	);
};

const Style = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;

	.username {
		font-size: 1rem;
		color: ${palette.dark.foreground.dimmed};

		&::before {
			font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
			content: "@";
			margin-top: -1rem;
		}
	}

	.name {
		position: relative;
		font-size: 1.5rem;
		font-weight: 500;
		text-transform: uppercase;

		/* &::after {
			position: absolute;
			content: "_";
			margin-left: 0.125rem;
			animation-name: blink;
			animation-duration: 1s;
			animation-iteration-count: infinite;
		} */
	}

	.description {
		color: ${palette.dark.foreground.dimmed};
	}

	@keyframes blink {
		0% {
			opacity: 0;
		}

		50% {
			opacity: 1;
		}

		100% {
			opacity: 0;
		}
	}
`;

export default Name;
