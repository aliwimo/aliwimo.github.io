import styled from "styled-components";
import variables from "@/assets/variables";
import palette from "@/assets/palette";
import FieldLink from "@/components/resume/components/field/FieldLink";

const FieldTitle = (props) => {
	return (
		<Style>
			<span>{props.title}</span>
			{props.notes ? <span className="notes">{props.notes}</span> : null}
			{props.link ? <FieldLink link={props.link} /> : null}
		</Style>
	);
};

const Style = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 0.5rem;
	font-size: 1.2rem;
	font-weight: 500;
	text-align: left;
	margin-bottom: 0;

	&::before {
		position: absolute;
		content: "";
		width: 0.375rem;
		height: 0.375rem;
		/* border-radius: ${variables.borderRadius.sm};
		border-top-right-radius: 0; */
		background-color: ${palette.dark.foreground.base};
		left: -1rem;
		top: 0.75rem;
	}

	.notes {
		font-size: 0.7rem;
	}
`;

export default FieldTitle;
