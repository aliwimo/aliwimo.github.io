import palette from "@/assets/palette";
import SvgIcon from "@/components/icons/SvgIcon";
import styled from "styled-components";

const Contact = () => {
	return (
		<Style>
			<li>
				<a className="gmail" href="mailto:aliwimo@gmail.com">
					<SvgIcon name="gmail" />
				</a>
			</li>
			<li>
				<a className="linkedin" href="https://www.linkedin.com/in/aliwimo/" target="_blank">
					<SvgIcon name="linkedin" />
				</a>
			</li>
			<li>
				<a className="github" href="https://github.com/aliwimo" target="_blank">
					<SvgIcon name="github" />
				</a>
			</li>
			<li>
				<a className="twitter" href="https://twitter.com/aliwimo" target="_blank">
					<SvgIcon name="twitter" />
				</a>
			</li>
		</Style>
	);
};

const Style = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	margin-top: 1rem;
	display: flex;
	flex-direction: row;
	gap: 0.5rem;
	flex-wrap: wrap;
	background-color: ${palette.dark.background.darker};
	border-radius: 0.675rem;
	padding: 0 0.5rem;

	li {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 2.5rem;
		height: 2.5rem;
		color: var(--main-fg);
		transition: all 400ms ease-out;

		a {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 100%;
			height: 100%;
			margin: 0;
			text-decoration: none;
			color: ${palette.dark.foreground.dimmed};
			transition: all 400ms ease-out;

			&:hover {
				svg {
					fill: ${palette.dark.foreground.base};
				}
			}

			svg {
				fill: ${palette.dark.foreground.dimmed};
				transition: all 400ms ease-out;
			}
		}
	}
`;

export default Contact;
