import styled from "styled-components";
import palette from "@/assets/palette";

const Field = (props) => {
	return (
		<Style>
			<div className="container">
				<div className="title">{props.title}</div>
				<div className="date">
					<span className="from">{props.from}</span>
					<span className="to">{props.to ? props.to : "Present"}</span>
				</div>
			</div>
			<div className="org">{props.org}</div>
			{props.desc && <div className="desc">{props.desc}</div>}
		</Style>
	);
};

// styling
const Style = styled.div`
	margin-bottom: 1rem;
	color: ${palette.dark.foreground.base};

	.container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 0;

		.date {
			font-size: 0.75rem;
			font-style: italic;
			color: ${palette.dark.foreground.dimmed};

			.from::after {
				content: " - ";
			}
		}

		.title {
			font-size: 1.2rem;
			font-weight: 500;
			text-align: left;
			margin-bottom: 0;
		}
	}

	.org {
		font-size: 0.9rem;
		color: ${palette.dark.foreground.dimmed};
		font-style: italic;
	}

	.desc {
		font-size: 0.9rem;
		margin-top: 0.25rem;
	}
`;

export default Field;
