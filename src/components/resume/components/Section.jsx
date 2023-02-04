import styled from "styled-components";

const Section = (props) => {
	return <Style>{props.children}</Style>
};

const Style = styled.div`
	padding: 2rem 2rem;
	display: flex;
	flex-direction: column;
	row-gap: 1.25rem;
`;

export default Section;