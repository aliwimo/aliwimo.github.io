import styled from "styled-components";
import variables from "@/assets/variables";
import palette from "@/assets/palette";

const FieldTitle = (props) => {
	return <Style>{props.title}</Style>;
};

const Style = styled.div`
	position: relative;
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
`;

export default FieldTitle;
