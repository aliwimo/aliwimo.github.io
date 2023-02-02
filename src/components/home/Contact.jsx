import SvgIcon from "../icons/SvgIcon";
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
				<a className="linkedin" href="https://www.linkedin.com/in/aliwimo/">
					<SvgIcon name="linkedin" />
				</a>
			</li>
			<li>
				<a className="github" href="https://github.com/aliwimo">
					<SvgIcon name="github" />
				</a>
			</li>
			<li>
				<a className="twitter" href="https://twitter.com/aliwimo">
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
	background-color: #1b1b1b;
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
			color: var(--second-fg);
			transition: all 400ms ease-out;

			&:hover {
				color: var(--main-fg);

				svg {
					opacity: 1;
				}
			}

			svg {
				fill: var(--main-fg);
				opacity: 0.5;
				transition: all 400ms ease-out;
			}
		}
	}
`;

export default Contact;
