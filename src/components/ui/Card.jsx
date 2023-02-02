import styled from "styled-components";

const Card = (props) => {
	return <Style>{props.children}</Style>;
};

const Style = styled.div`
	width: 100%;
	padding: 2rem 2.5rem;
	max-width: 720px;
	margin: 0 auto;
`;

export default Card;
