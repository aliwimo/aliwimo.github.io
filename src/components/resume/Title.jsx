import styled from "styled-components";

const Title = (props) => {
	return <Style>{props.title}</Style>;
};

const Style = styled.div`
	width: 100%;
	text-align: center;
	margin-bottom: 1rem;
	font-size: 0.9rem;
`;

export default Title;
