import styled from "styled-components";
import palette from "@/assets/palette";

const FieldDate = (props) => {
	return (
		<Style>
			{typeof props.date === "object" ? (
				<>
					<span className="from">{props.date.from}</span>
					<span className="to">
						{props.date.to ? props.date.to : "present"}
					</span>
				</>
			) : (
				<span className="to">{props.date}</span>
			)}
		</Style>
	);
};

const Style = styled.div`
	font-size: 0.75rem;
	font-style: italic;
	color: ${palette.dark.foreground.dimmed};

	.from {
		text-transform: capitalize;

		&::after {
			content: " - ";
		}
	}

	.to {
		text-transform: capitalize;
	}
`;

export default FieldDate;
