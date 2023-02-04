import styled from "styled-components";
import palette from "@/assets/palette";

const FieldOrg = (props) => {
	return <Style>{props.org}</Style>;
};

const Style = styled.div`
	font-size: 0.9rem;
	color: ${palette.dark.foreground.dimmed};
	font-style: italic;
`;

export default FieldOrg;
