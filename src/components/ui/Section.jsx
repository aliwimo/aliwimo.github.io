import styled from "styled-components";

const Section = (props) => {
	return <Style>{props.children}</Style>
};

const Style = styled.div`
	padding: 2rem 2rem;
`;

export default Section;